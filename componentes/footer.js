function footer(section) {
  section.innerHTML =
    `<div class="wrapper">
    <div class="col-a">
      <a class="logo" href="/home.html"> The Big Three </a>

      <p>
        ©2023 CREDITOS <br>Andrey Cadmo, Danubia Cardoso, Sarah Marques & Adriel Santana <br/>
        Todos os direitos reservados.
      </p>
    </div>

    <div class="col-b">
      <ul class="social-links">
        <li>
          <a
          href="https://www.instagram.com/cinnamon_child._/"
          title="Instagram da Sarah"
          target="_blank">
          <button class="transparente"><img src="../images/Geral/sarah.png"></button> 
        </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dreyzin06/"
            title="Instagram do Andrey"
            target="_blank">
            <button class="transparente"><img src="../images/Geral/Andrey.png"></button> 
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/foxkamitani/"
            title="Instagram da Danubia"
            target="_blank">
            <button class="transparente"><img src="../images/Geral/danubia.png"></button> 
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/adriel_8383/"
            title="Instagram do Adriel"
            target="_blank">
            <button class="transparente" id="adriel"><img src="../images/Geral/adriel.png"></button> 
          </a>
        </li>
      </ul>
    </div>
  </div>`
  ;
}

export { footer };