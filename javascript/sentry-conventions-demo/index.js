#!/usr/bin/env node

// Import attribute conventions using ES6 syntax
import {
  AI_MODEL_ID,
  ATTRIBUTE_METADATA,
  AttributeName,
  BROWSER_NAME,
  DB_SYSTEM,
  ERROR_TYPE,
  GEN_AI_REQUEST_MODEL,
  HTTP_METHOD,
  HTTP_REQUEST_METHOD,
  HTTP_STATUS_CODE,
  SENTRY_ORIGIN,
  USER_ID,
} from '@sentry/conventions/attributes';
import * as attributes from '@sentry/conventions/attributes';

console.log('🎯 Sentry Attribute Conventions Demo (ES6 Imports)\n');

console.log('🌐 HTTP Attributes:');
console.log(`  Method: "${HTTP_METHOD}"`);
console.log(`  Status Code: "${HTTP_STATUS_CODE}"`);

console.log('\n👤 User Attributes:');
console.log(`  User ID: "${USER_ID}"`);

console.log('\n🤖 AI Attributes:');
console.log(`  AI Model ID: "${AI_MODEL_ID}"`);
console.log(`  Gen AI Request Model: "${GEN_AI_REQUEST_MODEL}"`);

console.log('\n🗄 Database Attributes:');
console.log(`  Database System: "${DB_SYSTEM}"`);

console.log('\n🌐 Browser Attributes:');
console.log(`  Browser Name: "${BROWSER_NAME}"`);

console.log('\n🚨 Error Attributes:');
console.log(`  Error Type: "${ERROR_TYPE}"`);

console.log('\n📊 Sentry Attributes:');
console.log(`  Origin: "${SENTRY_ORIGIN}"`);

console.log('\n✅ All attribute conventions imported using ES6 imports!');

console.log('\n🔍 Testing Metadata Functionality:\n');

// Test the attributeMetadata function
const httpMethodMetadata = ATTRIBUTE_METADATA['http.method'];
if (httpMethodMetadata) {
  console.log('📋 HTTP Method Metadata:');
  console.log(`  Brief: "${httpMethodMetadata.brief}"`);
  console.log(`  Type: ${httpMethodMetadata.type}`);
  console.log(`  Contains PII: ${httpMethodMetadata.pii.isPii}`);
  console.log(`  Is in OTEL: ${httpMethodMetadata.isInOtel}`);
  if (httpMethodMetadata.example) {
    console.log(`  Example: ${JSON.stringify(httpMethodMetadata.example)}`);
  }
  if (httpMethodMetadata.deprecation) {
    console.log(`  DEPRECATED: Use "${httpMethodMetadata.deprecation.replacement}" instead`);
  }
}

// Test with translation function using direct map access
console.log('\n🌍 Testing Translation Function:');
const mockT = (text) => `[TRANSLATED] ${text}`;
const baseMetadata = ATTRIBUTE_METADATA['ai.model_id'];
if (baseMetadata) {
  const translatedMetadata = {
    ...baseMetadata,
    brief: mockT(baseMetadata.brief),
  };
  console.log('🤖 AI Model ID Metadata (with translation):');
  console.log(`  Brief: "${translatedMetadata.brief}"`);
}

// Direct access to metadata dictionary
console.log('\n📚 Direct Metadata Dictionary Access:');
const userIdMetadata = ATTRIBUTE_METADATA['user.id'];
if (userIdMetadata) {
  console.log('👤 User ID Metadata:');
  console.log(`  Brief: "${userIdMetadata.brief}"`);
  console.log(`  Contains PII: ${userIdMetadata.pii.isPii}`);
}

console.log('\n✨ Metadata functionality working correctly!');

console.log('\n🔢 Testing AttributeName Enum:\n');

console.log('📝 Using AttributeName enum for type-safe access:');
console.log(`  HTTP Method from enum: "${AttributeName.HTTP_METHOD}"`);
console.log(`  User ID from enum: "${AttributeName.USER_ID}"`);
console.log(`  AI Model ID from enum: "${AttributeName.AI_MODEL_ID}"`);

// Type-safe metadata access using enum
const httpMethodFromEnum = ATTRIBUTE_METADATA[AttributeName.HTTP_METHOD];
if (httpMethodFromEnum) {
  console.log('🔒 Type-safe enum access to metadata:');
  console.log(`  Brief: "${httpMethodFromEnum.brief}"`);
}

console.log('\n✅ AttributeName enum provides full type safety!');

console.log('\n🚀 All functionality working correctly!');
