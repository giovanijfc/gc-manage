export default function getResponseMessageByCode(code) {
  switch (code) {
    case "auth/network-request-failed":
      return "A requisição falhou...";
    case "auth/too-many-requests":
      return "Você tentou muitas vezes, espere um pouco para tentar novamente...";
    case "auth/user-disabled":
      return "Sua conta foi desativada, entre em contato com a nossa administração...";
    case "auth/user-not-found":
      return "Email não encontrado em nossa base de dados...";
    case "auth/user-not-found":
      return "Conta não encontrada em nossa base de dados...";
    case "auth/invalid-email":
      return "O email digitado é inválido...";
    case "auth/wrong-password":
      return "A senha digitada é inválida...";
    default:
      return "Ocorreu um erro me nosso servidor, por favor tente novamente...";
  }
}
