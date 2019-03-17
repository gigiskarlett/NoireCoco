const sortDescOrder = this.props.product.sort(
  (a, b) => parseFloat(a.price) - parseFloat(b.price)
);

const sortAscOrder = this.props.product.sort(
  (b, a) => parseFloat(b.price) - parseFloat(a.price)
);
