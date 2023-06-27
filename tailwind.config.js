/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'phone' : '375px',
      'tablet' : '1024px',
      'laptop' : '1280px',
      'desktop' : '1728px',
    },
    colors : {
      'background' : '#26102A',
      'text-color' : '#E4C7B7',
      'accent-1' : '#8C4C6F',
      'accent-2' : '#C26499',
    },
    padding : {
      '100' : '100px',
      '64' : '64px',
      '48' : '48px',
      '24' : '24px',
      '16' : '16px',
      '8' : '8px',
    },
    gap : {
      '100' : '100px',
      '64' : '64px',
      '48' : '48px',
      '24' : '24px',
      '16' : '16px',
      '8' : '8px',
    },
    fontFamily : {
      'inter' : ['Inter', 'sans-serif'],
      'email' : ['Courier New', 'sans-serif'],
    },
    fontSize : {
      'h1' : ['120px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'h2' : ['64px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'h3' : ['48px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'h4' : ['36px', {
        lineHeight: 'auto',
        letterSpacing: '9.18px',
        fontWeight: '600',
      }],
      'h5' : ['24px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'body' : ['18px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: 'normal',
      }],
      'subheading' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: '6.2px',
        fontWeight: 'normal',
      }],
      'tablet-h1' : ['75px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'tablet-h2' : ['40px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'tablet-h3' : ['32px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'tablet-h4' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: '5.1px',
        fontWeight: '600',
      }],
      'tablet-h5' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'tablet-subhead' : ['18px', {
        lineHeight: 'auto',
        letterSpacing: '5.58px',
        fontWeight: '600',
      }],
      'tablet-body' : ['16px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: 'normal',
      }],
      'phone-h1' : ['48px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'phone-h2' : ['36px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'phone-h3' : ['32px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'phone-h4' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: '5.1px',
        fontWeight: '600',
      }],
      'phone-h5' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'phone-h6' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'btn-lg' : ['18px', {
        lineHeight: '26px',
        letterSpacing: '0.46px',
        fontWeight: '700',
      }],
      'btn-m' : ['14px', {
        lineHeight: '26px',
        letterSpacing: '0.46px',
        fontWeight: '700',
      }],
    },
    extend: {},
  },
  plugins: [],
}