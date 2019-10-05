import { saveAs } from 'file-saver/FileSaver'

const DownloadWhitepaper = async (lang = 'en') => {
  try {
    const withepaper = await fetch(`${process.env.API_URL}/whitepaper`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/pdf' }
    })
    // console.log(withepaper)
    const withepaperBlob = await withepaper.blob()
    // withepaperBlob.lastModifiedDate = new Date();
    // withepaperBlob.name = 'whitepaper_Bramble.pdf';
    // var file = new Blob([await withepaper.blob()], {
    // type: 'application/pdf'
    // });

    // saveAs(withepaperBlob, 'whitepaper_Bramble.pdf')
    saveAs(withepaperBlob, `whitepaper_Bramble_${lang.toUpperCase()}.pdf`)
  } catch (e) {
    //
  }
}

// const DownloadWhitepaper = async (lang = 'en') => {
//   try {
//     const withepaper = await fetch(
//       `${process.env.API_URL}/users`,
//       {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/pdf' }
//       }
//     )

//     // const withepaperBlob = await withepaper.blob()
//     // saveAs(withepaperBlob, `whitepaper_Karbon14_${lang.toUpperCase()}.pdf`)
//     console.log(JSON.parse(withepaper))
//   } catch (e) {
//     //
//   }
// }

export { DownloadWhitepaper }
