const express = require('express');
const cors = require('cors');
const path = require('path');
const { MailService } = require('@sendgrid/mail');
const XLSX = require('xlsx');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Initialize SendGrid
const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
    mailService.setApiKey(process.env.SENDGRID_API_KEY);
} else {
    console.warn('SENDGRID_API_KEY not found. Email functionality will not work.');
}

// Helper function to create Excel file from form data
function createExcelFile(formData) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    // Prepare data for Excel
    const worksheetData = [
        ['Field', 'Value'],
        ['Date de soumission', new Date().toLocaleString('fr-FR')],
        ['Nom complet', formData.name || ''],
        ['Email', formData.email || ''],
        ['Téléphone', formData.phone || ''],
        ['Entreprise', formData.company || ''],
        ['Pays de départ', formData.departure_country || ''],
        ['Adresse de départ', formData.departure_address || ''],
        ['Pays d\'arrivée', formData.arrival_country || ''],
        ['Adresse d\'arrivée', formData.arrival_address || ''],
        ['Incoterm', formData.incoterm || ''],
        ['Date d\'expédition', formData.shipping_date || ''],
        ['Description de la cargaison', formData.cargo_description || ''],
        ['Message supplémentaire', formData.additional_message || '']
    ];

    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    
    // Set column widths
    worksheet['!cols'] = [
        { width: 25 },
        { width: 50 }
    ];

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Demande de Devis');

    // Generate filename
    const filename = `devis-wenibac-${timestamp}.xlsx`;
    const filepath = path.join(__dirname, 'temp', filename);

    // Ensure temp directory exists
    if (!fs.existsSync(path.join(__dirname, 'temp'))) {
        fs.mkdirSync(path.join(__dirname, 'temp'));
    }

    // Write file
    XLSX.writeFile(workbook, filepath);

    return { filename, filepath };
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const formData = req.body;
        
        console.log('Received form data:', formData);

        // Validate required fields
        if (!formData.name || !formData.email) {
            return res.status(400).json({
                success: false,
                message: 'Les champs nom et email sont requis.'
            });
        }

        // For now, just log the data and create Excel file locally
        if (!process.env.SENDGRID_API_KEY) {
            console.log('⚠️  SendGrid not configured. Saving form data locally.');
            console.log('📧 When configured, emails would be sent to: wenibac67@gmail.com, oudrao@yahoo.com');
            
            // Create Excel file for download/manual handling
            const { filename, filepath } = createExcelFile(formData);
            
            console.log(`📄 Form data saved to Excel file: ${filename}`);
            
            return res.json({
                success: true,
                message: 'Votre demande de devis a été reçue avec succès. Nous vous contacterons bientôt.',
                filename: filename
            });
        }

        // Create Excel file
        const { filename, filepath } = createExcelFile(formData);

        // Read the Excel file as base64
        const excelBuffer = fs.readFileSync(filepath);
        const excelBase64 = excelBuffer.toString('base64');

        // Prepare email content
        const emailSubject = `Nouvelle demande de devis - ${formData.name}`;
        const emailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e3a8a;">Nouvelle demande de devis - Wenibac Advanced Shipping</h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e3a8a; margin-top: 0;">Informations du client</h3>
                    <p><strong>Nom:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Téléphone:</strong> ${formData.phone || 'Non renseigné'}</p>
                    <p><strong>Entreprise:</strong> ${formData.company || 'Non renseigné'}</p>
                </div>

                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e3a8a; margin-top: 0;">Détails de la demande</h3>
                    <p><strong>Pays de départ:</strong> ${formData.departure_country || 'Non renseigné'}</p>
                    <p><strong>Pays d'arrivée:</strong> ${formData.arrival_country || 'Non renseigné'}</p>
                    <p><strong>Adresse de départ:</strong> ${formData.departure_address || 'Non renseigné'}</p>
                    <p><strong>Adresse d'arrivée:</strong> ${formData.arrival_address || 'Non renseigné'}</p>
                    <p><strong>Incoterm:</strong> ${formData.incoterm || 'Non renseigné'}</p>
                    <p><strong>Date d'expédition:</strong> ${formData.shipping_date || 'Non renseigné'}</p>
                </div>

                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e3a8a; margin-top: 0;">Description de la cargaison</h3>
                    <p>${formData.cargo_description || 'Non renseigné'}</p>
                </div>

                ${formData.additional_message ? `
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e3a8a; margin-top: 0;">Message supplémentaire</h3>
                    <p>${formData.additional_message}</p>
                </div>
                ` : ''}

                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
                
                <p style="color: #6b7280; font-size: 14px;">
                    Ce message a été envoyé depuis le formulaire de contact du site web Wenibac Advanced Shipping Ltd.<br>
                    Date: ${new Date().toLocaleString('fr-FR')}
                </p>
            </div>
        `;

        // Configure recipient emails
        const recipientEmails = ['wenibac67@gmail.com', 'oudrao@yahoo.com'];
        console.log('📧 Email will be sent to:', recipientEmails.join(', '));

        // Send email with Excel attachment
        const msg = {
            to: recipientEmails,
            from: {
                email: 'noreply@wenibac.com',
                name: 'Wenibac Advanced Shipping'
            },
            replyTo: formData.email,
            subject: emailSubject,
            html: emailHTML,
            attachments: [
                {
                    content: excelBase64,
                    filename: filename,
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    disposition: 'attachment'
                }
            ]
        };

        // Send email
        await mailService.send(msg);

        // Clean up temporary file
        fs.unlinkSync(filepath);

        console.log('Email sent successfully with Excel attachment');

        res.json({
            success: true,
            message: 'Votre demande de devis a été envoyée avec succès. Nous vous contacterons bientôt.'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        
        // Clean up temporary file if it exists
        if (error.filepath && fs.existsSync(error.filepath)) {
            fs.unlinkSync(error.filepath);
        }

        res.status(500).json({
            success: false,
            message: 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        sendgrid_configured: !!process.env.SENDGRID_API_KEY
    });
});

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve other static files
app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, filename);
    
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wenibac server running on port ${PORT}`);
    console.log(`SendGrid configured: ${!!process.env.SENDGRID_API_KEY}`);
});