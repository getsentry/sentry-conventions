/**
 * Represents text content sent to or received from the model.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "TextPart".
 */
export interface TextPart {
  /**
   * The type of the content captured in this part.
   */
  type: 'text';
  /**
   * Text content sent to or received from the model.
   */
  content?: string;
}
