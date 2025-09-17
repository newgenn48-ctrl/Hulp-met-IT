import fs from 'fs'
import path from 'path'

interface TemplateData {
  [key: string]: any
}

// Simple template engine - replaces {{variable}} and handles basic conditionals
function renderTemplate(template: string, data: TemplateData): string {
  let rendered = template

  // Replace simple variables {{variable}}
  rendered = rendered.replace(/\{\{(\w+)\}\}/g, (_match, key) => {
    return data[key] || ''
  })

  // Handle conditional blocks {{#variable}} content {{/variable}}
  rendered = rendered.replace(/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_match, key, content) => {
    return data[key] ? content : ''
  })

  // Handle negative conditional blocks {{^variable}} content {{/variable}}
  rendered = rendered.replace(/\{\{\^(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_match, key, content) => {
    return !data[key] ? content : ''
  })

  return rendered
}

export function getCustomerEmailHtml(data: TemplateData): string {
  const templatePath = path.join(process.cwd(), 'lib/templates/customer-email.html')
  const template = fs.readFileSync(templatePath, 'utf-8')
  return renderTemplate(template, data)
}

export function getInternalEmailHtml(data: TemplateData): string {
  const templatePath = path.join(process.cwd(), 'lib/templates/internal-email.html')
  const template = fs.readFileSync(templatePath, 'utf-8')
  return renderTemplate(template, data)
}