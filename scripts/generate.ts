import { generateAttributes } from './generate_attributes';
import { generateDeprecatedAttributesJSON } from './generate_deprecated_attributes_json';
import { generateOps } from './generate_op';

generateOps();
generateAttributes();
generateDeprecatedAttributesJSON();
