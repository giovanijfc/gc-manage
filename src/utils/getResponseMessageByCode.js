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
    case "auth/wrong-password":
      return "A senha digitada é inválida...";
    case "auth/email-already-in-use":
      return "Email digitado já usado, tente novamente...";
    case "auth/invalid-email":
      return "Email digitado inválido, tente novamente...";
    case "auth/weak-password":
      return "Senha digitada muito fraca, tente novamente...";
    default:
      return "Ocorreu um erro me nosso servidor, por favor tente novamente...";
  }
}
