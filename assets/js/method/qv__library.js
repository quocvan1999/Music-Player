/**
 * DOM ELEMENT - Hàm dom tới 1 select
 * @param {*} element id hoặc class của một element
 * @returns Trả về một slected element
 */
export function domElement(element) {
    return document.querySelector(element);
}

/**
 * Hàm lấy style của một element
 * @param {*} element id hoặc class của đối tượng mà bạn muốn lấy style
 * @returns trả về style của một element
 */
export function getStyle(element) {
    return window.getComputedStyle(element);
}

/**
 * Đổi một số sang định dạng tiền Việt Nam
 * @param {*} money number
 * @returns trả về định dạng tiền Việt Nam
 */
export function toVND(money) {
    return money.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
}

/**
 * Chuyển đổi giây sang định dạng chuỗi phút : giây
 * @param {*} seconds number
 * @returns 00:00
 */
export function formarTime(seconds) {
    let newSeconds = seconds.toFixed(0)
    let minutes = Math.floor(newSeconds / 60);
    newSeconds = newSeconds % 60;

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    newSeconds = (newSeconds < 10) ? '0' + newSeconds : newSeconds;

    return minutes + ':' + newSeconds;
}

/**
 * Tìm chuỗi dài nhất trong một chuỗi và không chứ ký tự đặt biệt
 * @param {*} str string
 * @returns trả về chuỗi dài nhất
 */
export function longestSubstr(str) {
    // Biểu thức chính quy để kiểm tra ký tự đặc biệt
    let specialCharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    let longest = '';
    let current = '';

    for (let i = 0; i < str.length; i++) {
        // Nếu ký tự hiện tại không phải là ký tự đặc biệt
        if (!specialCharRegex.test(str[i])) {
            current += str[i];
            if (current.length > longest.length) {
                longest = current;
            }
        } else {
            current = '';
        }
    }
    return longest;
}

/**
 * Tính luỹ thừa của một số
 * @param {*} b number
 * @param {*} e number
 * @returns trả về luỹ thừa của một số
 */
export function powerOfNumber(b, e) {
    // Your code here
    let result = 1;

    for (let i = 0; i < e; i++) {
        result *= b;
    }

    return result;
}

/**
 * Hàm thêm dữ liệu vào một mảng
 * @param {*} arr mảng cần thêm dữ liệu
 * @param {*} data Dữ liệu cần thêm vào mảng
 * @returns Trả về một mảng đã thêm dữ liệu
 */
export function addArr(arr, data) {
    return arr.push(data);
}

/**
 * Hàm reset ô input về rỗng
 * @param {*} input input cần reset
 */
export function resetInput(input) {
    input.value = '';
}

export function tinhTongSoDuongChuoi(arr) {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            tong += arr[i];
        }
    }
    return tong > 0 ? tong : 0;
}

/**
 * Hàm đếm số lượng dố dương trong mảng
 * @param {*} arr mảng số
 * @returns Trả về tổng số lượng số dương có trong một mảng
 */
export function demSoDuongTrongChuoi(arr) {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            dem++;
        }
    }
    return dem;
}

/**
 * Hàm tìm và trả về số nhỏ nhất trong mảng bao gồm số âm
 * @param {*} arr mảng số
 * @returns Trả về số nhỏ nhất trong mảng
 */
export function timSoNhoNhatTrongChuoi(arr) {
    let minNumber;

    for (let i = 0; i < arr.length; i++) {
        if (minNumber === undefined) {
            minNumber = arr[i];
        } else if (arr[i] < minNumber) {
            minNumber = arr[i];
        } else {
            continue;
        }
    }

    return minNumber;
}

/**
 * Hàm tìm và trả về số nhỏ nhất là số dương có trong mảng
 * @param {*} arr mảng số
 * @returns Trả về số nhỏ nhất là số dương
 */
export function timSoDuongNhoNhatTrongChuoi(arr) {
    let minNumber;

    for (let i = 0; i < arr.length; i++) {
        if (minNumber === undefined) {
            minNumber = arr[i];
        } else if (arr[i] > 0 && arr[i] < minNumber) {
            minNumber = arr[i];
        } else {
            continue;
        }
    }

    return minNumber;
}

/**
 * Hàm tìm số chẵn nằm ở vị trị cuối cùng trong 1 mảng
 * @param {*} arr mảng số
 * @returns Trả về số chẵn cuối cùng trong 1 mảng
 */
export function timSoChanCuoiCungTrongChuoi(arr) {
    let soChan = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            soChan = arr[i];
        }
    }

    return soChan;
}

/**
 * Hàm đổi vị trí của 2 phần từ trong mảng cho nhau
 * @param {*} arr mảng
 * @param {*} viTri1 index 1
 * @param {*} viTri2 index 2
 * @returns Trả về mảng mới với 2 vị trí đã đổi giá trị cho nhau
 */
export function doiViTriTrongChuoi(arr, viTri1, viTri2) {
    let value1 = arr[viTri1];
    let value2 = arr[viTri2];

    arr[viTri1] = value2;
    arr[viTri2] = value1;

    return arr;
}

/**
 * Hàm sắp xếp một mảng tăng dần
 * @param {*} arr mảng
 * @returns Trả về một mảng mới được sắp xếp tăng dần
 */
export function sapXepChuoiTangDan(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

/**
 * Hàm tìm số Nguyên tố
 * @param {*} number number
 * @returns Trả về kết quả xem số kiểm tra có phải là số nguyên tố hay không
 */
export function timSoNT(number) {
    let sNT = true;

    if (number < 2) {
        sNT = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                sNT = false;
                break;
            }
        }
    }

    return sNT;
}

/**
 * Hàm tìm số nguyên tố đầu tiên trong mảng
 * @param {*} arr mảng số
 * @returns Trả về số nguyên tố đầu tiên trong mảng
 */
export function timSoNToDauTienTrongChuoi(arr) {
    let soNT = 0;

    for (let i = 0; i < arr.length; i++) {
        if (timSoNT(arr[i])) {
            soNT = arr[i];
            break;
        }
    }

    return soNT;
}

/**
 * Hàm đếm số lượng số nguyên trong mảng
 * @param {*} arr mảng số
 * @returns Trả về tổng số lượng số nguyên trong mảng
 */
export function timSoNguyen(arr) {
    let dem = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            dem += 1;
        }
    }

    return dem;
}

/**
 * Hàm so sánh số lượng số âm và số dương trong mảng
 * @param {*} arr 
 * @return Trả về 
 */
export function soSanh(arr) {
    let soDuong = 0;
    let soAm = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            soDuong += 1;
        } else {
            soAm += 1;
        }
    }

    return soDuong > soAm ? 'Số dương > số âm' : 'Số âm > số dương';
}

/**
 * Hàm nhận vào một chuỗi in ra một chuỗi theo dạng UpperCase
 * @param {*} string chuỗi
 * @returns chuỗi mới có định dạng UpperCase
 */
export function upperCase(string) {
    let newStr = string.split(' ');
    let ketQua = newStr.map(newStr => newStr.charAt(0).toUpperCase() + newStr.slice(1)).join('');

    return ketQua;
}

// =================================================================

export function getMusicInfo(arr, index, isRandom) {
    let number = ranDomNumber(arr.length);
    if (isRandom === true) {
        return arr[number - 1];
    } else {
        return arr[index];
    }
}

export function newAudio(src) {
    return new Audio(src);
}

export function playOrPauseAudio(audio, icon1, icon2) {
    let iconPlay = domElement(icon1);
    let iconPause = domElement(icon2);

    if (audio.paused) {
        audio.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'inline-block';
    } else {
        audio.pause();
        iconPlay.style.display = 'inline-block';
        iconPause.style.display = 'none';
    }
}

export function loopAudio(audio) {
    if (audio.loop === false) {
        audio.loop = true;
    } else {
        audio.loop = false;
    }
}

export function checkLoopAudio(audio) {
    if (audio.loop === true) {
        audio.loop = false;
        return true;
    }
}

export function ranDomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}

export function randomBackgroundColor() {
    let color1 = populate();
    let color2 = populate();
    let color = 'linear-gradient(to right,' + color1 + ',' + color2 + ")";
    return color;
}

export function populate() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let colorRandom = "#";
    for (let i = 0; i < 6; i++) {
        let x = Math.round(Math.random() * 14);
        let y = hex[x];
        colorRandom += y;
    }
    return colorRandom;
}











