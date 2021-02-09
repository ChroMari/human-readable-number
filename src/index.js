module.exports = function toReadable (number) {
  const number0 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; //0-9
  const number00 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; //10-19
  const number$0 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; //20-90
  let [ one, two = false, three = false ] = String(number).split('');

  if (one && two && three) {
    one = number0[Number(one)] + ' hundred';
 
    if (Number(two) === 0) { 
      two = null;
      three = (Number(three) === 0) ? null : number0[Number(three)];
      return [one, three].join(' ').trim();
    } else if (Number(two) === 1) {
      two = null;
      three = number00[Number(three)];
      return [one, three].join(' ');
    } else {
      two = number$0[Number(two) - 2];
      three = (Number(three) === 0) ? null : number0[Number(three)];
    }
   
    return [one, two, three].join(' ').trim();
  } else if (one && two) {
    if (Number(one) === 1) {
      one = null;
      two = number00[Number(two)];
    } else {
      one = number$0[Number(one) - 2];
      two = (Number(two) === 0) ? null : number0[Number(two)];
    }

    return [one, two].join(' ').trim();
  } else {
    return number0[Number(one)];
  }
  
}
