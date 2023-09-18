type productType = {
  name: string;
  vendor: string;
  quantity: number;
  inStock: number;
  price: number;
  isHalal?: boolean;
};

type simplifiedProductType = {
  name: string;
  buyable: boolean;
  totalPrice?: number;
  status?: string;
  cashback?: number;
  isHalal?: boolean;
};

const firstProduct: productType = {
  name: `Coca Cola`,
  vendor: `Coca Cola Company`,
  quantity: 5,
  inStock: 100,
  price: 5000,
};

const secondProduct: productType = {
  name: `Sari Roti`,
  vendor: `Toko Kue Sebelah`,
  quantity: 2,
  inStock: 0,
  price: 10000,
};

// console.log(combineWords([1, `data`, 3, `result`]));
// console.log(combineWords([`Bejo`, `has`, `4`, `sport`, `car`]));

// console.log(sumValue([1, 2, 3, 4]));
// console.log(sumValue([`the`, `dolphins`, `of`, `zettacamp`]));
// console.log(sumValue([`Bejo`, `has`, 4, `sport`, `car`]));

console.log(simplifiedProduct(firstProduct));
console.log(simplifiedProduct(secondProduct));

function combineWords(words: Array<string | number>): string {
  let sentence: string = words.join(' ');
  if (!sentence) {
    return 'Array is Empty';
  }
  return sentence;
}

function sumValue(data: Array<string | number>): string | number {
  let finalValue: string | number;
  if (!data.length) {
    return 'Array is Empty';
  } else if (data.every((value): boolean => typeof value === 'string')) {
    finalValue = data.join(' ');
    return finalValue;
  } else if (data.every((value): boolean => typeof value === 'number')) {
    finalValue = data.reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0);
    return finalValue;
  }
  return 'invalid input';
}

function simplifiedProduct(product: productType): simplifiedProductType {
  const productDetails: simplifiedProductType = {
    name: product.name,
    buyable: false,
  };
  if (product.inStock > product.quantity) {
    let totalPrice: number = product.quantity * product.price;
    productDetails.totalPrice = totalPrice;
    productDetails.buyable = true;
	if (productDetails.totalPrice > 100_000) {
	  productDetails.status = 'Get 6% cashback'
	  productDetails.cashback = totalPrice * 6 / 100
	}
  }
  if (typeof product.isHalal === 'boolean') {
    productDetails.isHalal = product.isHalal;
  }
  return productDetails;
}
