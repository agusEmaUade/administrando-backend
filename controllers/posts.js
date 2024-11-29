const fs = require('fs');
const path = require('path');
const MailService = require('../services/mail');
const handlebars = require('handlebars');

const createPost = async (req, res) => {
    try {
        const templatePath = path.resolve(__dirname, '../templates/email.template.hbs');
        const templateSource = fs.readFileSync(templatePath, 'utf8');

        const template = handlebars.compile(templateSource);

        const htmlContent = template({
            title:"mila",
            authorName: "test",
            productName: "s",
            content: "sd",
            imageUrl: ""
        });

        await MailService.sendMail(
            "agyanez@uade.edu.ar",
            `Your post has been created successfully!`,
            htmlContent)

        res.status(201).json("exito");
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    createPost,
};