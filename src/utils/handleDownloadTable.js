import templateUjianDinas from '../data/dataColUD'
import templatePenyesuaianIjazah from '../data/penyesuaianIjazah'
import xlsx from 'json-as-xlsx'

const rowst = [
    {
      id: 1,
      no: '3',
      unit_eselon_II: 4,
      unit_kerja: 'Cilebut timur',
      nomor_ijazah: 'Cilebut timur',
      nama_peserta: 'Cilebut timur',
      nip: 'Cilebut timur',
      tempat_tanggal_lahir: 'Cilebut timur',
      pancasila: 'Cilebut timur',
      uud_1945: 'Cilebut timur',
      propenas: 'Cilebut timur',
      pengetahuan_bidang_kepegawaian: 'Bojonggede',
      korpri: 0,
      bahasa_indonesia: 0,
      sejarah: 0,
      pengetahuan_perkantoran: 0,
      keputusan: 0,
      link_foto: 0,
    },
    {
      id: 2,
      no: '4',
      unit_eselon_II: 4,
      unit_kerja: 'Cilebut timur',
      nomor_ijazah: 'Cilebut timur',
      nama_peserta: 'Cilebut timur',
      nip: 'Cilebut timur',
      tempat_tanggal_lahir: 'Cilebut timur',
      pancasila: 'Cilebut timur',
      uud_1945: 'Cilebut timur',
      propenas: 'Cilebut timur',
      pengetahuan_bidang_kepegawaian: 'Bojonggede',
      korpri: 0,
      bahasa_indonesia: 0,
      sejarah: 0,
      pengetahuan_perkantoran: 0,
      keputusan: 0,
      link_foto: 0,
    }
  ]

  const rowsP = [
    {
      id: 1,
      no: '3',
      unit_eselon_II: 4,
      unit_kerja: 'Cilebut timur',
      nomor_ijazah: 'Cilebut timur',
      nama_peserta: 'Cilebut timur',
      nip: 'Cilebut timur',
      tempat_tanggal_lahir: 'Cilebut timur',
      bidang_studi: 'Cilebut timur',
      statistik: 'Cilebut timur',
      pengetahuan_umum: 'Cilebut timur',
      pancasila: 'Cilebut timur',
      kuantitatif: 'Cilebut timur',
      bahasa_inggris: 'Cilebut timur',
      bahasa_indonesia: 'Cilebut timur',
      kkp: 'Cilebut timur',
      keputusan: 'Cilebut timur',
      link_foto: 'Cilebut timur',
    },
    {
        id: 2,
        no: '3',
        unit_eselon_II: 4,
        unit_kerja: 'Cilebut timur',
        nomor_ijazah: 'Cilebut timur',
        nama_peserta: 'Cilebut timur',
        nip: 'Cilebut timur',
        tempat_tanggal_lahir: 'Cilebut timur',
        bidang_studi: 'Cilebut timur',
        statistik: 'Cilebut timur',
        pengetahuan_umum: 'Cilebut timur',
        pancasila: 'Cilebut timur',
        kuantitatif: 'Cilebut timur',
        bahasa_inggris: 'Cilebut timur',
        bahasa_indonesia: 'Cilebut timur',
        kkp: 'Cilebut timur',
        keputusan: 'Cilebut timur',
        link_foto: 'Cilebut timur',
    },
  ]


export const handleDownloadTable = (kegiatan) => {
    const dataKolom = kegiatan=='ujianDinas' ?  templateUjianDinas.map(kol => ({
      label: kol.field,
      value: kol.field
    })) 
    : 
    templatePenyesuaianIjazah.map(kol => ({
        label: kol.field,
        value: kol.field
    }))

    dataKolom.unshift({ label: 'id', value: 'id' })

    let dataDownload = [
      {
        sheet: 'sheetone',
        columns: dataKolom,
        content: rowst
      }
    ]

    let settings = {
      fileName: 'template_table_' ,
      extraLength: 3,
      writeMode: 'writeFile',
      writeOptions: {},
      RTL: false
    }

    xlsx(dataDownload, settings)
  }