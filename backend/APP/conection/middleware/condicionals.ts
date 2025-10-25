type Valor = string | number | boolean;
/**
 *
 * @param {(string | number | boolean )} valor1 - eq(val,val1)
 */
export const AND = (...valor1: Valor[]) => {
  const separacion = valor1.join(" and ");
  return `(${separacion})`;
};
/**
 *
 * @param {(string | number | boolean )} valor1 - eq(val,val1)
 */
export const OR = (...valor1: Valor[]) => {
  const separadosComas = valor1.join(" or ");
  return `(${separadosComas})`;
};

export const ILIKE = (valor1: string, valor2: string) => {
  return `${valor1} ILIKE '%${valor2}%'`;
};

/**
 *
 * @param {String} variable -Type timestamp
 * @param {Number} diasTrancurridos -type number
 */
export const now = (
  variable: string,
  diasTrancurridos: number,
  minor = true
) => {
  if (typeof variable !== "string") {
    throw new Error("Variable no valida");
  }

  if (typeof diasTrancurridos !== "number") {
    throw new Error("dias Transcurridos no valido");
  }

  if (minor) {
    return `( ${variable} < NOW() - INTERVAL '${diasTrancurridos} days')`;
  }

  return `( ${variable} > NOW() - INTERVAL '${diasTrancurridos} days')`;
};

/**
 *
 * @param {String} variable - variable
 */
export const NULL = (variable: string) => {
  return `${variable} IS NULL`;
};

/**
 *
 * @param {String} variable
 * @returns
 */
export const NOTNULL = (variable: string) => {
  return `${variable} IS NOT NULL`;
};

/**
 *
 * @param {(string | number | boolean )} valor1 - primer valor
 * @param {(string | number | boolean )} valor2 - segundo valor
 */
export const eq = (valor1: Valor, valor2: Valor, variable = true) => {
  if (typeof valor1 === "string") valor1 = valor1.trim();
  if (typeof valor2 === "string") valor2 = valor2.trim();

  if (!variable) {
    return `${valor1} = ${valor2}`;
  }
  return `${valor1} = '${valor2}'`;
};

export const mayor = (valor: string, valor2: string) => {
  return ` ${valor} > ${valor2} `;
};
export const menor = (valor: string, valor2: string) => {
  return ` ${valor} < ${valor2} `;
};
