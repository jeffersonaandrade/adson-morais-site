// Configurações centralizadas de contato
export const contactConfig = {
  // Informações do WhatsApp
  whatsapp: {
    phone: "558799498484",
    message: "Olá! Gostaria de agendar uma consulta com o Dr. Adson Morais.",
    url: "https://wa.me/558799498484"
  },
  
  // Mensagens específicas do WhatsApp
  whatsappMessages: {
    consulta: "Olá! Gostaria de agendar uma consulta com o Dr. Adson Morais.",
    curso: "Olá! Gostaria de saber mais sobre o Curso de Formação Completa de Quiropraxia Clínica.",
    duvidas: "Olá! Tenho dúvidas sobre os tratamentos oferecidos pelo Dr. Adson Morais.",
    orcamento: "Olá! Gostaria de saber mais sobre valores e horários de atendimento."
  },
  
  // Informações do Doctoralia
  doctoralia: {
    url: "https://www.doctoralia.com.br/adson-de-morais-ferreira/quiropraxista/recife",
    name: "Adson de Morais Ferreira"
  },
  
  // Redes Sociais
  social: {
    instagram: {
      url: "https://www.instagram.com/adsonmorais/",
      username: "@adsonmorais"
    }
  },
  
  // Informações gerais de contato
  phone: "(87) 99949-8484",
  email: "adson.fisio@outlook.com",
  location: "Avenida Engenheiro Domingos Ferreira, 467 - BV - Empresarial da Moura Dubeux - Sala 403, Recife, PE",
  
  // Endereços dos consultórios
  offices: [
    {
      name: "CAF - CENTRO AVANÇADO DE FISIOTERAPIA",
      address: "Avenida Engenheiro Domingos Ferreira, 467 - BV - Empresarial da Moura Dubeux - Sala 403",
      phone: "(87) 99949-8484"
    },
    {
      name: "Consultório Adson Morais - Studio Pilátes Já - Sala 905",
      address: "Rua Arnóbio Marques 253, Santo Amaro, Recife",
      phone: "(87) 99949-8484"
    }
  ],
  
  // Horários de atendimento
  schedule: [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábado", hours: "8h às 12h" },
    { day: "Domingo", hours: "Fechado" }
  ],
  
  // Especialidades
  specialties: [
    "Fisioterapia",
    "Osteopatia", 
    "Terapia Crânio Sacral",
    "Liberação Miofascial Instrumental",
    "Quiropraxia"
  ],
  
  // Estatísticas
  stats: {
    experience: "10+",
    patients: "500+",
    specialties: "5"
  },
  
  // Informações do Curso
  course: {
    title: "Curso de Formação Completa de Quiropraxia Clínica",
    price: "R$ 1.800",
    description: "Formação completa e profissionalizante em Quiropraxia Clínica, ministrado por especialista reconhecido pelo Coffito."
  }
};

// Funções utilitárias
export const getWhatsAppUrl = (customMessage = null) => {
  const message = customMessage || contactConfig.whatsapp.message;
  return `${contactConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppUrlByType = (type = 'consulta') => {
  const message = contactConfig.whatsappMessages[type] || contactConfig.whatsappMessages.consulta;
  return `${contactConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
};

export const getPhoneUrl = () => {
  return `tel:+${contactConfig.whatsapp.phone}`;
};

export const getEmailUrl = () => {
  return `mailto:${contactConfig.email}`;
};

// Funções para redes sociais
export const getInstagramUrl = () => {
  return contactConfig.social.instagram.url;
};

// Função para curso
export const getCourseWhatsAppUrl = () => {
  return getWhatsAppUrlByType('curso');
};
