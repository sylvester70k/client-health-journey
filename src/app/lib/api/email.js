import emailjs from '@emailjs/nodejs';

const emailUserId = {
    publicKey: process.env.EMAIL_PUBLIC_KEY,
    privateKey: process.env.EMAIL_PRIVATE_KEY,
};

export const sendClientRegistrationEmail = async (newClient, clinicName, tempPassword) => {
    if (process.env.NODE_ENV == "production") {
        const templateParams = {
            name: newClient.name,
            login_url: `${process.env.NEXTAUTH_URL}/login`,
            user_email: newClient.email,
            email: newClient.email,
            user_pwd: tempPassword,
            clinic_name: clinicName,
            phone_number: newClient.phone,
        };

        await emailjs.send(
            process.env.EMAIL_SERVICE_ID,
            process.env.EMAIL_CLIENT_TEMPLATE_ID,
            templateParams,
            emailUserId
        );
    } else {
        console.log("send confirm mail");
    }
}

export const sendCoachRegistrationEmail = async (newCoach, tempPassword) => {
    if (process.env.NODE_ENV == "production") {
        const templateParams = {
            name: newCoach.name,
            login_url: `${process.env.NEXTAUTH_URL}/login`,
            user_email: newCoach.email,
            user_pwd: tempPassword,
            support_email: 'support@clienthealthtracker.com',
            website_url: 'www.clienthealthtracker.com',
            email: newCoach.email,
        }

        await emailjs.send(
            process.env.EMAIL_SERVICE_ID,
            process.env.EMAIL_COACH_TEMPLATE_ID,
            templateParams,
            emailUserId
        );
    } else {
        console.log("send confirm mail");
    }
}

export const sendClinicRegistrationEmail = async (clinicEmail, clinicName, clinicPhone, email, password) => {
    if (process.env.NODE_ENV == "production") {
        const templateParams = {
            name: clinicName,
            login_url: `${process.env.NEXTAUTH_URL}/login`,
            user_email: email,
            user_pwd: password,
            support_email: 'support@clienthealthtracker.com',
            website_url: 'www.clienthealthtracker.com',
            email: clinicEmail,
            phone_number: clinicPhone,
        }

        await emailjs.send(
            process.env.EMAIL_SERVICE_ID,
            process.env.EMAIL_COACH_TEMPLATE_ID,
            templateParams,
            emailUserId
        );
    } else {
        console.log("send confirm mail");
    }
}