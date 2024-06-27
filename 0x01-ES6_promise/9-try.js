export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (error) {
    queue.push(String(error), 'Guardrail was processed');
  }
  return queue;
}
