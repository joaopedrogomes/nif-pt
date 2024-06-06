const categorize = (value = '') => {
	if (!value || typeof value !== "string" || value.length !== 9) return null
  const area = {
		oneNumber: {
			'1': 'pessoa singular',
			'2': 'pessoa singular',
			'3': 'pessoa singular',
			'5': 'pessoa colectiva',
			'6': 'administração pública'
		},
		twoNumbers: {
			'45': 'pessoa singular não residente',
			'70': 'herança indivisa',
			'71': 'pessoa colectiva não residente',
			'72': 'fundos de investimento',
			'77': 'atribuição oficiosa',
			'79': 'regime excepcional',
			'90': 'condominios e sociedades irregulares',
			'91': 'condominios e sociedades irregulares',
			'98': 'não residentes',
			'99': 'sociedades civis'
		}
	}
  return area.oneNumber[value.substring(0, 1)] || area.twoNumbers[value.substring(0, 2)] || null
}

const designate = (value = '') => {
  if (!value || typeof value !== "string" || value.length !== 9) return null;
  if (parseInt(value.substring(0,1)) > 4) return 'NIPC';
  else return 'NIF';
}

const validate = (value = '') => {
  if (!value || typeof value !== "string" || value.length !== 9) return false;

  const firstEightDigits = value.slice(0, value.length - 1);
  let validationSum = 0;
  for (let i = 9; i >= 2; i--) validationSum += i * (parseInt(value[value.length - i]) || 0);

  const module = validationSum % 11;
  if (module === 0 || module === 1) return `${firstEightDigits}0` === value;
  else return `${firstEightDigits}${11 - module}` === value;
}

const nif = (value = '') => {
  return {
    category: categorize(value),
    designation: designate(value),
    valid: validate(value)
  }
}

module.exports = { categorize, designate, nif, validate }