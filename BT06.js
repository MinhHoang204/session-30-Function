function countTriangles(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
            count++;
          }
        }
      }
    }
    return count;
  }
  
  let arr = [3, 4, 5, 6, 7, 8, 9];
  let triangleCount = countTriangles(arr);
  console.log(`Số lượng hình tam giác có thể tạo ra từ các phần tử trong mảng là ${triangleCount}.`);