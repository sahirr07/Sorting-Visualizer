function Quick() {

  qSort(0, arraySize - 1);

  enableButton();
}

function qDivide(start, end) {
  var i = start + 1;

  //Pivot- First Element
  var piv = barHeight[start]; 

  divUpdate(arr[start], barHeight[start], "yellow"); 

  for (var j = start + 1; j <= end; j++) {

    //Rearrange Elements around Pivot
    if (barHeight[j] < piv) {
      divUpdate(arr[j], barHeight[j], "yellow"); 

      divUpdate(arr[i], barHeight[i], "red"); 
      divUpdate(arr[j], barHeight[j], "red"); 

      var temp = barHeight[i];
      barHeight[i] = barHeight[j];
      barHeight[j] = temp;

      divUpdate(arr[i], barHeight[i], "red"); 
      divUpdate(arr[j], barHeight[j], "red"); 

      divUpdate(arr[i], barHeight[i], "blue"); 
      divUpdate(arr[j], barHeight[j], "blue"); 

      i += 1;
    }
  }
  divUpdate(arr[start], barHeight[start], "red"); 
  divUpdate(arr[i - 1], barHeight[i - 1], "red"); 

  //Put the pivot element in its proper place
  var temp = barHeight[start]; 
  barHeight[start] = barHeight[i - 1];
  barHeight[i - 1] = temp;

  divUpdate(arr[start], barHeight[start], "red"); 
  divUpdate(arr[i - 1], barHeight[i - 1], "red"); 

  for (var t = start; t <= i; t++) {
    divUpdate(arr[t], barHeight[t], "green"); 
  }

  //Return the position of the pivot
  return i - 1; 
}

function qSort(start, end) {
  if (start < end) {

    //Stores the position of pivot element
    var pivotPos = qDivide(start, end);
    qSort(start, pivotPos - 1); // Left side of Pivot Sorting
    qSort(pivotPos + 1, end); // Right side of Pivot Sorting
  }
}
