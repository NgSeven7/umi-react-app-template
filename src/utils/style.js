import _ from 'lodash';

export const getRGBA = (color, alpha = 1) => {
  const rgb = _.chain(color)
    .tail()
    .chunk((color.length - 1) / 3)
    .map((channel) =>
      _.chain(channel)
        .concat(channel.length === 1 ? channel[0] : '')
        .join('')
        .parseInt(16)
        .value(),
    )
    .value();
  return `rgba(${rgb},${alpha})`;
};

export const getPrimaryColor = (color) => (color ? color : '#4285F4');
