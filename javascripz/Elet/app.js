function hiba()
  {

    h=0

    sorjelol( 3,0)
    sorjelol( 4,0)
    sorjelol( 5,0)
    sorjelol( 6,0)
    sorjelol( 7,0)
    sorjelol(12,0)
    sorjelol(13,0)

    if (lap.k7[0].checked && lap.k5[1].checked && lap.k6[1].checked)
    {
                                    sorjelol(7,1)
            if (lap.k3[0].checked)  sorjelol(3,1)
      else  if (lap.k4[0].checked)  sorjelol(4,1)
      else                         {sorjelol(5,1)
                                    sorjelol(6,1)}

      h++
    }

    if (lap.k12[1].checked && lap.k13[0].checked)
    {
      sorjelol(12,1)
      sorjelol(13,1)
      h++
    }

    if(h)  alert('Ellentmondás a jelölt helyeken!')

    return h

  }
function ertekel()
  {

    if (hiba()==0)
    {
      kor=72

      if (document.lap.k1[0].checked)   kor=kor-3
      if (document.lap.k2[0].checked)   kor=kor+4

      if (document.lap.k3[0].checked)   kor=kor+2
      if (document.lap.k4[0].checked)   kor=kor+3
      if (document.lap.k5[0].checked)   kor=kor+4
      if (document.lap.k6[0].checked)   kor=kor+5
      if (document.lap.k7[0].checked)   kor=kor+3

      if (document.lap.k8[0].checked)   kor=kor-2
      if (document.lap.k9[0].checked)   kor=kor+2

      if (document.lap.k10[0].checked)  kor=kor-3
      if (document.lap.k11[0].checked)  kor=kor+5

      if (document.lap.k12[0].checked)  kor=kor+1
      if (document.lap.k13[0].checked)  kor=kor+2

      if (document.lap.k14[0].checked)  kor=kor-2
      if (document.lap.k15[0].checked)  kor=kor-3
      if (document.lap.k16[0].checked)  kor=kor+3
      if (document.lap.k17[0].checked)  kor=kor+2
      if (document.lap.k18[0].checked)  kor=kor-4
      if (document.lap.k19[0].checked)  kor=kor+1
      if (document.lap.k20[0].checked)  kor=kor-2
      if (document.lap.k21[0].checked)  kor=kor-3
      if (document.lap.k22[0].checked)  kor=kor+3
      if (document.lap.k23[0].checked)  kor=kor-1

      if (document.lap.k24[0].checked)  kor=kor-8
      if (document.lap.k25[0].checked)  kor=kor-6
      if (document.lap.k26[0].checked)  kor=kor-3

      if (document.lap.k27[0].checked)  kor=kor-1

      if (document.lap.k28[0].checked)  kor=kor-8
      if (document.lap.k29[0].checked)  kor=kor-4
      if (document.lap.k30[0].checked)  kor=kor-2

      if (document.lap.k31[0].checked)  kor=kor+2
      if (document.lap.k32[0].checked)  kor=kor+2
      if (document.lap.k33[0].checked)  kor=kor+6
      if (document.lap.k34[0].checked)  kor=kor-4
      if (document.lap.k35[0].checked)  kor=kor-3

      alert("Várható életkorod: "+kor+" év.")
    }

  }