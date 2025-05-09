import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  titleHero: {
    description: 'Hero title text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '72px',
      fontWeight: 'bold',
      letterSpacing: '-0.03em',
      lineHeight: '1.2'
    }
  },
  titlePage: {
    description: 'Page title text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '48px',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      lineHeight: '1.2'
    }
  },
  subtitle: {
    description: 'Subtitle text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '32px',
      fontWeight: '400',
      letterSpacing: '0%',
      lineHeight: '1.2'
    }
  },
  heading: {
    description: 'Heading text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '24px',
      fontWeight: '600',
      letterSpacing: '-0.02em',
      lineHeight: '1.2'
    }
  },
  subheading: {
    description: 'Subheading text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '20px',
      fontWeight: '400',
      letterSpacing: '0%',
      lineHeight: '1.2'
    }
  },
  'body.base': {
    description: 'Body base text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'body.strong': {
    description: 'Strong body text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '600',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'body.emphasis': {
    description: 'Italic body text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'body.link': {
    description: 'Body link text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'body.small': {
    description: 'Small body text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'body.small.strong': {
    description: 'Strong small body text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'body.code': {
    description: 'Code text style',
    value: {
      fontFamily: 'Roboto Mono',
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'body.code.bold': {
    description: 'Bold code text style',
    value: {
      fontFamily: 'Roboto Mono',
      fontSize: '16px',
      fontWeight: '700',
      letterSpacing: '0%',
      lineHeight: '1.5'
    }
  },
  'singleLine.body.base': {
    description: 'Single line body text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0%',
      lineHeight: '1'
    }
  },
  'singleLine.body.small.strong': {
    description: 'Single line strong small body text style',
    value: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '0%',
      lineHeight: '1'
    }
  }
}) 