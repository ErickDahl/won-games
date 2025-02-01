const sanitize = (input: string): string => {
  const allowedTags = [
    'b',
    'i',
    'em',
    'strong',
    'a',
    'p',
    'ul',
    'ol',
    'li',
    'br',
    'span',
    'h1',
    'h2',
    'h3',
    'img'
  ]

  const regex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g

  return input.replace(regex, (match, tag) => {
    if (allowedTags.includes(tag.toLowerCase())) {
      return match
    } else {
      return ''
    }
  })
}

export { sanitize }
