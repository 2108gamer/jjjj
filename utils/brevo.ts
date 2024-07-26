import brevo from '@getbrevo/brevo';
import { TransactionalEmailsApi, SendSmtpEmail, TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

const emailSend = new TransactionalEmailsApi()

emailSend.setApiKey(
    TransactionalEmailsApiApiKeys.apiKey,
   "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" 
)

const smtpEmail = new SendSmtpEmail()


export async function sendEmail() {
try {
    
    smtpEmail.subject = "Copia de Acta"
    smtpEmail.to = [{email: "ricarlopez2708@gmail.com", name: "Ricardo"}, {email: "esligil005@gmail.com", name: "Eshli"}]
    smtpEmail.templateId = 1
    smtpEmail.sender = {name: "Eshli", email: "panel@strxnge.us"}
    
    emailSend.sendTransacEmail(smtpEmail)
    
    
} catch (error) {
   console.log(error) 
}



}