function AdvSquare() {
  const googleScript = `<div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>

      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-4026486048166934"
        data-ad-slot="9591525811"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>`

  return (
    <div className="adv-box adv-square">
      {console.log(googleScript)}
      <div dangerouslySetInnerHTML={{ __html: googleScript }}></div>
    </div>
  )
}

export default AdvSquare
