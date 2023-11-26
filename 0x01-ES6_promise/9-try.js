export default function guardrail(mathFunction) {
  const quene = [];
  try {
    const results = mathFunction();
    quene.push(results);
  } catch (err) {
    quene.push(`Error: ${err.message}`);
  } finally {
    quene.push('Guardrail was processed');
  }
  return quene;
}
