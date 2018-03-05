import React from 'react';

class DeliveryOptionProductImage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <img alt={this.props.imageList[0].imageType} src={this.props.imageList[0].imageUrl}/>
    );
  }
}


export default DeliveryOptionProductImage;
