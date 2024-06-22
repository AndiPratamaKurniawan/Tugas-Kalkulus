function calculate() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var result = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = "Mohon masukkan nilai yang valid.";
        return;
    }

    var discriminant = Math.pow(b, 2) - 4 * a * c;

    if (a === 0) {
        result.innerHTML = "Ini bukan persamaan kuadrat.";
    } else if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.innerHTML = "x1 = " + x1 + ", x2 = " + x2;
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        result.innerHTML = "Hanya ada satu solusi: x = " + x;
    } else {
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        result.innerHTML = "Solusi kompleks: x1 = " + realPart.toFixed(2) + " + " + imaginaryPart.toFixed(2) + "i dan x2 = " + realPart.toFixed(2) + " - " + imaginaryPart.toFixed(2) + "i";
    }

    // Memanggil fungsi untuk menampilkan langkah-langkah penyelesaian persamaan linier dan kuadrat
    var linearResult = solveLinearEquation(a, b);
    var quadraticResult = solveQuadraticEquation(a, b, c);
    result.innerHTML += "<br><br><strong>Langkah-langkah penyelesaian persamaan linear:</strong><br>" + linearResult;
    result.innerHTML += "<br><br><strong>Langkah-langkah penyelesaian persamaan kuadrat:</strong><br>" + quadraticResult;
}

function solveLinearEquation(a, b) {
    var sign = (b < 0) ? "" : "+";
    var step1 = "Langkah 1: " + a + "x " + sign + " " + b + " = 0";
    var step2 = "Langkah 2: " + a + "x = " + (-b);
    var step3 = "Langkah 3: x = " + (-b) + " / " + a;
    var step4 = "Langkah 4: x = " + ((-b) / a);

    var result = step1 + "<br>" + step2 + "<br>" + step3 + "<br>" + step4;
    return result;
}

function solveQuadraticEquation(a, b, c) {
    // Langkah 1: Hitung diskriminan
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    var steps = `Langkah 1: Hitung diskriminan, D = b^2 - 4ac = (${b})^2 - 4*(${a})*(${c}) = ${discriminant}<br>`;

    if (discriminant > 0) {
        // Langkah 2: D > 0, ada dua solusi nyata
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        steps += `Langkah 2: Karena D > 0, ada dua solusi nyata.<br>`;
        steps += `Langkah 3: Hitung x1 = (-b + √D) / (2a) = (${(-b)} + √${discriminant}) / ${2 * a} = ${x1.toFixed(2)}<br>`;
        steps += `Langkah 4: Hitung x2 = (-b - √D) / (2a) = (${(-b)} - √${discriminant}) / ${2 * a} = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        // Langkah 2: D = 0, ada satu solusi nyata
        var x = -b / (2 * a);
        steps += `Langkah 2: Karena D = 0, ada satu solusi nyata.<br>`;
        steps += `Langkah 3: Hitung x = -b / (2a) = (${(-b)}) / ${2 * a} = ${x.toFixed(2)}`;
    } else {
        // Langkah 2: D < 0, tidak ada solusi dalam bilangan real
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        steps += `Langkah 2: Karena D < 0, tidak ada solusi dalam bilangan real.<br>`;
        steps += `Bagian real x = -b / (2a) = (${(-b)}) / ${2 * a} = ${realPart.toFixed(2)}<br>`;
        steps += `Bagian imajiner x = √(-D) / (2a) = √(${(-discriminant)}) / ${2 * a} = ${imaginaryPart.toFixed(2)}<br>`;
        steps += `Jadi, solusi kompleksnya adalah: x1 = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i dan x2 = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
    }

    return steps;
}

// Contoh penggunaan:
console.log(solveQuadraticEquation(1, 2, 0));

document.addEventListener('DOMContentLoaded', function() {
  // Ambil semua elemen <li> yang memiliki class "social-links"
  const socialLinks = document.querySelectorAll('.social-links li');

  // Tambahkan event listener untuk setiap elemen <li>
  socialLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Ambil ID dari elemen yang diklik
      const id = this.id;

      // Tautan sesuai dengan ID
      let url = '';
      switch (id) {
        case 'google':
          url = 'https://www.google.com';
          break;
        case 'facebook':
          url = 'https://www.facebook.com';
          break;
        case 'twitter':
          url = 'https://www.twitter.com';
          break;
        case 'yahoo':
          url = 'https://www.yahoo.com';
          break;
        case 'windows':
          url = 'https://www.microsoft.com';
          break;
        default:
          url = '#'; // Default jika tidak ada yang cocok
      }

      // Buka tautan dalam tab baru
      window.open(url, '_blank');
    });
  });
});
