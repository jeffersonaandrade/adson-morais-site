// Configurações centralizadas de contato
export const contactConfig = {
  // Informações do WhatsApp
  whatsapp: {
    phone: "558799498484",
    message: "Olá! Gostaria de agendar uma consulta com o Dr. Adson Morais.",
    url: "https://wa.me/558799498484"
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
  email: "contato@adsonmorais.com",
  location: "Recife, PE",
  
  // Endereços dos consultórios
  offices: [
    {
      name: "CAF - CENTRO AVANÇADO DE FISIOTERAPIA",
      address: "Avenida Engenheiro Domingos Ferreira, 467 - Boa Viagem, Recife",
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
  }
};

// Funções utilitárias
export const getWhatsAppUrl = (customMessage = null) => {
  const message = customMessage || contactConfig.whatsapp.message;
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
