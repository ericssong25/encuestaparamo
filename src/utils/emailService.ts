import { SurveyData } from '../types/survey';

export async function sendSurveyEmail(data: SurveyData): Promise<boolean> {
  const emailBody = `
Nueva respuesta de encuesta de satisfacción - Páramo Creativo

═══════════════════════════════════════════════════

INFORMACIÓN DEL ENCUESTADO
Nombre: ${data.name}

1. ATENCIÓN AL CLIENTE
Calificación: ${data.customerService}/10
${data.customerServiceComment ? `Comentario: ${data.customerServiceComment}` : ''}

2. VALORACIÓN DEL DISEÑO Y EDICIÓN
Calificación: ${data.designQuality}/10
${data.designQualityComment ? `Comentario: ${data.designQualityComment}` : ''}

3. RETOS O PUNTOS DE FRICCIÓN
${data.challenges || 'No proporcionó respuesta'}

4. PROBABILIDAD DE RECOMENDACIÓN (NPS)
Calificación: ${data.recommendation}/10

5. ASPECTOS A MEJORAR
${data.improvements || 'No proporcionó respuesta'}

═══════════════════════════════════════════════════

Fecha: ${new Date().toLocaleString('es-ES')}
  `.trim();

  console.log('Encuesta completada:', emailBody);

  return true;
}
