export function evaluateResponse(message) {
  const feedback = [];

  if (message.includes("siempre") || message.includes("nunca")) {
    feedback.push("⚠️ Evitá generalizaciones como 'siempre' o 'nunca'. Podrían herir y no reflejan toda la verdad.");
  }

  if (message.includes("culpa")) {
    feedback.push("💡 Tratá de usar frases en primera persona, evitando poner la responsabilidad total en el otro.");
  }

  if (message.length < 10) {
    feedback.push("📝 Podés expresar un poco más para que tu pareja entienda mejor tu vivencia.");
  }

  if (feedback.length === 0) {
    feedback.push("✅ Gracias por compartir. Estás comunicando de forma sana.");
  }

  return feedback;
}
