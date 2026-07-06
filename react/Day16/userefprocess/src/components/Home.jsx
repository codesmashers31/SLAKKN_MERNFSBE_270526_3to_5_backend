import { useEffect, useRef } from "react"


const Home = () => {

const homeRef = useRef()

const aboutRef = useRef()
const contectRef = useRef()

const projectRef = useRef()


const home = ()=>{

homeRef.current.scrollIntoView({
    behavior:"smooth"
})


}

const about = ()=>{
    aboutRef.current.scrollIntoView({
    behavior:"smooth"
})
}

const contect = ()=>{
    contectRef.current.scrollIntoView({
    behavior:"smooth"
})
}

const project = ()=>{
    projectRef.current.scrollIntoView({
    behavior:"smooth"
})
}

const movetotop = ()=>{
//  alert('running')
    projectRef.scrollTo({

        top:0,
        behavior:"smooth"
    })

}


useEffect(()=>{
      window.scrollTo({

        top:0,
        behavior:"smooth"
    })
},[])


  return (
    <>
    
   
    <div>
        <button onClick={home}>Home</button>
        <button onClick={about}>About</button>
        <button onClick={contect}>Contact</button>
        <button onClick={project}>Project</button>
    </div>

    <section ref={homeRef}>
     <h2>Home</h2>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam accusamus sed corrupti nihil, eaque molestias, nobis labore obcaecati, debitis quas minus ex? Eos maiores animi repudiandae voluptatem soluta, dolor accusantium.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rerum harum ratione porro sunt incidunt dolorum vero. Dignissimos sapiente alias ipsam nisi eius quas. Quasi, aut animi! Velit, reprehenderit quis.
        Reiciendis, veniam assumenda! Consectetur doloremque sit delectus cupiditate. Commodi excepturi quaerat animi doloribus quas eaque. Cumque, nesciunt doloremque laborum sapiente fugit ex, ea eligendi quaerat omnis quia voluptates corporis voluptate.
        Eius nihil tempore aspernatur praesentium eveniet similique quibusdam autem, soluta natus sunt maiores facere possimus ipsa sequi deserunt molestiae rem ipsam dolorem voluptatem illum ex? Eligendi saepe quos unde dolor?
        Dicta, est reprehenderit, eaque placeat libero excepturi veritatis earum, neque impedit possimus perferendis. Voluptate labore necessitatibus sequi adipisci, reprehenderit asperiores hic facilis eaque illum error et omnis cumque ea nemo!
        In tempore, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut consectetur accusantium perspiciatis. Officia, ad! Explicabo laborum praesentium et pariatur consectetur. Omnis est nobis veritatis cum ducimus, ullam officiis harum?
        Cumque corrupti voluptatem, iusto exercitationem officiis quia expedita vero. Nobis excepturi doloremque aspernatur. Tempore, deserunt? Mollitia modi dolorem corrupti necessitatibus nesciunt atque, voluptatum, dignissimos illum quisquam ad earum. Blanditiis, quos.
        Qui, esse aliquam odit, impedit quas in, deleniti unde excepturi ducimus amet repellat rem debitis! Aut nihil delectus reprehenderit fugiat odio repellat, voluptate dolor doloribus autem unde id ducimus recusandae.
        Eveniet veritatis eligendi labore ad sint aliquid totam nisi aut cumque? Porro accusantium laborum eaque quisquam fugiat odit est veritatis, sunt eligendi deserunt ab impedit fugit maiores iure similique quis!
        Id ducimus ut optio quaerat quo alias quas temporibus consequuntur itaque et autem similique, quasi omnis vero aperiam facere laudantium nam exercitationem dolores fugit molestias. Dicta amet dolores blanditiis id?
        Blanditiis veritatis magnam enim cum quis cupiditate sequi quisquam doloribus, eos distinctio maxime. Aperiam odit ab veniam nisi. Beatae quis distinctio eum harum officia iste maxime vitae cupiditate voluptatum blanditiis!
        Reiciendis expedita consequatur sit animi commodi ad reprehenderit perspiciatis facere quisquam nobis, enim nulla, sunt voluptates! Alias sed repellendus, id exercitationem consequatur ipsum debitis nesciunt dolor quos dignissimos? Dolor, beatae.
        Aliquam, nisi commodi hic enim accusantium porro ducimus ut perspiciatis autem maxime animi in laudantium consequuntur numquam, fugit cumque, error quis quod nobis repudiandae! Sed repellendus nisi a accusamus cupiditate?
        Non, tempore? Repudiandae porro provident eveniet similique, molestiae quis nulla, cumque ab dignissimos necessitatibus inventore ut in suscipit minima, dolorum doloribus reprehenderit expedita? In temporibus eaque, vitae numquam aspernatur ex.
        Ratione soluta natus totam optio rerum dicta eaque quos laboriosam expedita, tenetur aut illo dolor facilis nulla tempora explicabo laudantium assumenda tempore corrupti adipisci mollitia ex omnis nesciunt iusto! Blanditiis.
        Sed unde veniam nemo eveniet magni laboriosam eligendi molestiae temporibus? Distinctio aperiam voluptates alias asperiores ducimus aut quo nihil voluptate consequuntur corrupti, eos reiciendis fugit minus illo soluta dolores eveniet.
        Illum iste eum aliquid error tempora, obcaecati odio molestiae cum animi officia perspiciatis mollitia possimus minima, placeat atque ipsa eius facilis optio minus reprehenderit quam dolore laudantium. Dolor, aut commodi.
        Ex corrupti facere nostrum? Exercitationem quas accusamus alias officia ab! Incidunt mollitia enim doloremque veniam error, consectetur non recusandae adipisci unde est quos, id ipsa officia accusantium, dolorem quibusdam reprehenderit?
        Eum odit quae, aperiam aut magni totam soluta laboriosam veniam autem optio maiores aliquid modi rerum nisi expedita qui praesentium doloribus debitis odio eaque vel. Excepturi quidem corrupti cupiditate. Distinctio.
        Amet adipisci, eveniet fuga ipsam odit ex quos ab, quo atque ad laboriosam similique temporibus id vitae. Facilis consectetur corporis accusamus distinctio quaerat, non rerum, iure dignissimos culpa, esse iusto!
        Temporibus quia soluta, error aliquam reprehenderit sint eligendi provident fugiat ex numquam adipisci. Sunt, autem exercitationem! Tenetur totam aliquam, reiciendis animi repellat quam laboriosam, consequuntur nihil repudiandae fugiat molestiae deleniti?
        Hic praesentium veniam dicta corporis quis illum omnis voluptatem a laboriosam explicabo delectus modi impedit ducimus officiis culpa optio asperiores, doloremque cum fugit id vero magnam iusto vel. Minus, maxime.
        Excepturi consequuntur nisi hic, ipsa obcaecati omnis illum libero dolorem. Tenetur vero consequatur dignissimos ad, error in libero ea ducimus, velit alias accusantium dolore. Ipsum voluptas ipsa vel deserunt sapiente!
        Blanditiis, quaerat temporibus deleniti vitae nostrum eius eaque delectus ipsam perferendis odio! Delectus cupiditate laudantium consequatur quam. Perspiciatis ipsam debitis voluptates, ducimus earum porro sapiente error molestias autem enim expedita.
        Ducimus voluptatibus veritatis neque est natus nostrum maxime dolorem repellat voluptate atque reiciendis, recusandae voluptates consectetur vero magni, nesciunt numquam maiores perferendis, beatae enim omnis nemo pariatur dicta a. Reiciendis.
        Eaque asperiores, aliquid odit sapiente, eius veniam laboriosam dolor magni aut ipsum quos? Debitis distinctio voluptatibus, quisquam ratione beatae eius quam animi doloribus molestias temporibus voluptatum fugit aspernatur cumque quas.
        Perspiciatis dolor, aliquam debitis quasi cupiditate consequuntur sequi omnis ipsam nobis veniam, architecto dolorem reprehenderit illum optio fuga ea incidunt. Repudiandae numquam rerum fugit corrupti minus dolorem quos vitae in.
        Repellat ipsa dicta molestias fugit. Eaque cupiditate excepturi maxime praesentium. Et, nobis maxime! Deleniti vel suscipit quae nemo veritatis deserunt accusantium, quis exercitationem ratione maxime, mollitia totam, sint repellendus provident?
        Quasi, hic est. Veniam sequi quod sunt. Repudiandae velit dolore iste neque. Quod culpa facere, beatae nemo earum, quasi rem optio provident architecto recusandae, at deserunt sint autem eaque nisi.
        Animi repellat dicta sit cum distinctio? Enim dicta dolores maxime velit deleniti nulla voluptas inventore tempora explicabo aperiam itaque autem minus quia aliquid consequuntur, repellendus eaque assumenda illum at dolor?
        Commodi itaque mollitia est cum et reprehenderit praesentium amet quibusdam quasi necessitatibus rem placeat, veniam animi obcaecati eligendi natus suscipit ut! Voluptates fuga exercitationem quo corporis consectetur fugit eius voluptatibus!
        Doloribus itaque soluta eum autem esse rerum laudantium mollitia voluptates reprehenderit enim. Suscipit quasi mollitia quae eius perferendis dignissimos ut praesentium placeat accusantium ipsam harum debitis iusto, at sequi. Expedita?
        Praesentium veniam magnam labore quis iste incidunt sit? Sint quidem cumque odio velit vero pariatur iusto mollitia, blanditiis minima, quaerat maxime molestiae. Delectus dolorem molestias vel rem ad exercitationem incidunt.
        Voluptatum nihil error libero esse magnam voluptatibus praesentium, rem totam quam vel earum animi molestias neque, soluta temporibus repellendus laborum, perspiciatis optio! Excepturi nobis alias, commodi ab minus voluptas quis.
        Magnam necessitatibus ab repellendus velit, sunt dicta nulla autem dignissimos totam ea quam iste soluta ratione! Maiores consequatur ad nihil doloremque, aperiam dolore blanditiis eveniet nisi nam obcaecati voluptate eum! nulla delectus neque sit cum doloribus beatae magnam aperiam. Magni numquam quidem labore nisi quam, voluptatibus aspernatur, molestias vel officia voluptatum nesciunt? Dolore cupiditate accusamus quis quo impedit.
     </p>
    </section>

     <section ref={aboutRef}>
     <h2>About</h2>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam accusamus sed corrupti nihil, eaque molestias, nobis labore obcaecati, debitis quas minus ex? Eos maiores animi repudiandae voluptatem soluta, dolor accusantium.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rerum harum ratione porro sunt incidunt dolorum vero. Dignissimos sapiente alias ipsam nisi eius quas. Quasi, aut animi! Velit, reprehenderit quis.
        Reiciendis, veniam assumenda! Consectetur doloremque sit delectus cupiditate. Commodi excepturi quaerat animi doloribus quas eaque. Cumque, nesciunt doloremque laborum sapiente fugit ex, ea eligendi quaerat omnis quia voluptates corporis voluptate.
        Eius nihil tempore aspernatur praesentium eveniet similique quibusdam autem, soluta natus sunt maiores facere possimus ipsa sequi deserunt molestiae rem ipsam dolorem voluptatem illum ex? Eligendi saepe quos unde dolor?
        Dicta, est reprehenderit, eaque placeat libero excepturi veritatis earum, neque impedit possimus perferendis. Voluptate labore necessitatibus sequi adipisci, reprehenderit asperiores hic facilis eaque illum error et omnis cumque ea nemo!
        In tempore, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut consectetur accusantium perspiciatis. Officia, ad! Explicabo laborum praesentium et pariatur consectetur. Omnis est nobis veritatis cum ducimus, ullam officiis harum?
        Cumque corrupti voluptatem, iusto exercitationem officiis quia expedita vero. Nobis excepturi doloremque aspernatur. Tempore, deserunt? Mollitia modi dolorem corrupti necessitatibus nesciunt atque, voluptatum, dignissimos illum quisquam ad earum. Blanditiis, quos.
        Qui, esse aliquam odit, impedit quas in, deleniti unde excepturi ducimus amet repellat rem debitis! Aut nihil delectus reprehenderit fugiat odio repellat, voluptate dolor doloribus autem unde id ducimus recusandae.
        Eveniet veritatis eligendi labore ad sint aliquid totam nisi aut cumque? Porro accusantium laborum eaque quisquam fugiat odit est veritatis, sunt eligendi deserunt ab impedit fugit maiores iure similique quis!
        Id ducimus ut optio quaerat quo alias quas temporibus consequuntur itaque et autem similique, quasi omnis vero aperiam facere laudantium nam exercitationem dolores fugit molestias. Dicta amet dolores blanditiis id?
        Blanditiis veritatis magnam enim cum quis cupiditate sequi quisquam doloribus, eos distinctio maxime. Aperiam odit ab veniam nisi. Beatae quis distinctio eum harum officia iste maxime vitae cupiditate voluptatum blanditiis!
        Reiciendis expedita consequatur sit animi commodi ad reprehenderit perspiciatis facere quisquam nobis, enim nulla, sunt voluptates! Alias sed repellendus, id exercitationem consequatur ipsum debitis nesciunt dolor quos dignissimos? Dolor, beatae.
        Aliquam, nisi commodi hic enim accusantium porro ducimus ut perspiciatis autem maxime animi in laudantium consequuntur numquam, fugit cumque, error quis quod nobis repudiandae! Sed repellendus nisi a accusamus cupiditate?
        Non, tempore? Repudiandae porro provident eveniet similique, molestiae quis nulla, cumque ab dignissimos necessitatibus inventore ut in suscipit minima, dolorum doloribus reprehenderit expedita? In temporibus eaque, vitae numquam aspernatur ex.
        Ratione soluta natus totam optio rerum dicta eaque quos laboriosam expedita, tenetur aut illo dolor facilis nulla tempora explicabo laudantium assumenda tempore corrupti adipisci mollitia ex omnis nesciunt iusto! Blanditiis.
        Sed unde veniam nemo eveniet magni laboriosam eligendi molestiae temporibus? Distinctio aperiam voluptates alias asperiores ducimus aut quo nihil voluptate consequuntur corrupti, eos reiciendis fugit minus illo soluta dolores eveniet.
        Illum iste eum aliquid error tempora, obcaecati odio molestiae cum animi officia perspiciatis mollitia possimus minima, placeat atque ipsa eius facilis optio minus reprehenderit quam dolore laudantium. Dolor, aut commodi.
        Ex corrupti facere nostrum? Exercitationem quas accusamus alias officia ab! Incidunt mollitia enim doloremque veniam error, consectetur non recusandae adipisci unde est quos, id ipsa officia accusantium, dolorem quibusdam reprehenderit?
        Eum odit quae, aperiam aut magni totam soluta laboriosam veniam autem optio maiores aliquid modi rerum nisi expedita qui praesentium doloribus debitis odio eaque vel. Excepturi quidem corrupti cupiditate. Distinctio.
        Amet adipisci, eveniet fuga ipsam odit ex quos ab, quo atque ad laboriosam similique temporibus id vitae. Facilis consectetur corporis accusamus distinctio quaerat, non rerum, iure dignissimos culpa, esse iusto!
        Temporibus quia soluta, error aliquam reprehenderit sint eligendi provident fugiat ex numquam adipisci. Sunt, autem exercitationem! Tenetur totam aliquam, reiciendis animi repellat quam laboriosam, consequuntur nihil repudiandae fugiat molestiae deleniti?
        Hic praesentium veniam dicta corporis quis illum omnis voluptatem a laboriosam explicabo delectus modi impedit ducimus officiis culpa optio asperiores, doloremque cum fugit id vero magnam iusto vel. Minus, maxime.
        Excepturi consequuntur nisi hic, ipsa obcaecati omnis illum libero dolorem. Tenetur vero consequatur dignissimos ad, error in libero ea ducimus, velit alias accusantium dolore. Ipsum voluptas ipsa vel deserunt sapiente!
        Blanditiis, quaerat temporibus deleniti vitae nostrum eius eaque delectus ipsam perferendis odio! Delectus cupiditate laudantium consequatur quam. Perspiciatis ipsam debitis voluptates, ducimus earum porro sapiente error molestias autem enim expedita.
        Ducimus voluptatibus veritatis neque est natus nostrum maxime dolorem repellat voluptate atque reiciendis, recusandae voluptates consectetur vero magni, nesciunt numquam maiores perferendis, beatae enim omnis nemo pariatur dicta a. Reiciendis.
        Eaque asperiores, aliquid odit sapiente, eius veniam laboriosam dolor magni aut ipsum quos? Debitis distinctio voluptatibus, quisquam ratione beatae eius quam animi doloribus molestias temporibus voluptatum fugit aspernatur cumque quas.
        Perspiciatis dolor, aliquam debitis quasi cupiditate consequuntur sequi omnis ipsam nobis veniam, architecto dolorem reprehenderit illum optio fuga ea incidunt. Repudiandae numquam rerum fugit corrupti minus dolorem quos vitae in.
        Repellat ipsa dicta molestias fugit. Eaque cupiditate excepturi maxime praesentium. Et, nobis maxime! Deleniti vel suscipit quae nemo veritatis deserunt accusantium, quis exercitationem ratione maxime, mollitia totam, sint repellendus provident?
        Quasi, hic est. Veniam sequi quod sunt. Repudiandae velit dolore iste neque. Quod culpa facere, beatae nemo earum, quasi rem optio provident architecto recusandae, at deserunt sint autem eaque nisi.
        Animi repellat dicta sit cum distinctio? Enim dicta dolores maxime velit deleniti nulla voluptas inventore tempora explicabo aperiam itaque autem minus quia aliquid consequuntur, repellendus eaque assumenda illum at dolor?
        Commodi itaque mollitia est cum et reprehenderit praesentium amet quibusdam quasi necessitatibus rem placeat, veniam animi obcaecati eligendi natus suscipit ut! Voluptates fuga exercitationem quo corporis consectetur fugit eius voluptatibus!
        Doloribus itaque soluta eum autem esse rerum laudantium mollitia voluptates reprehenderit enim. Suscipit quasi mollitia quae eius perferendis dignissimos ut praesentium placeat accusantium ipsam harum debitis iusto, at sequi. Expedita?
        Praesentium veniam magnam labore quis iste incidunt sit? Sint quidem cumque odio velit vero pariatur iusto mollitia, blanditiis minima, quaerat maxime molestiae. Delectus dolorem molestias vel rem ad exercitationem incidunt.
        Voluptatum nihil error libero esse magnam voluptatibus praesentium, rem totam quam vel earum animi molestias neque, soluta temporibus repellendus laborum, perspiciatis optio! Excepturi nobis alias, commodi ab minus voluptas quis.
        Magnam necessitatibus ab repellendus velit, sunt dicta nulla autem dignissimos totam ea quam iste soluta ratione! Maiores consequatur ad nihil doloremque, aperiam dolore blanditiis eveniet nisi nam obcaecati voluptate eum! nulla delectus neque sit cum doloribus beatae magnam aperiam. Magni numquam quidem labore nisi quam, voluptatibus aspernatur, molestias vel officia voluptatum nesciunt? Dolore cupiditate accusamus quis quo impedit.
     </p>
    </section>

      <section ref={contectRef}>
     <h2>Contect</h2>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam accusamus sed corrupti nihil, eaque molestias, nobis labore obcaecati, debitis quas minus ex? Eos maiores animi repudiandae voluptatem soluta, dolor accusantium.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rerum harum ratione porro sunt incidunt dolorum vero. Dignissimos sapiente alias ipsam nisi eius quas. Quasi, aut animi! Velit, reprehenderit quis.
        Reiciendis, veniam assumenda! Consectetur doloremque sit delectus cupiditate. Commodi excepturi quaerat animi doloribus quas eaque. Cumque, nesciunt doloremque laborum sapiente fugit ex, ea eligendi quaerat omnis quia voluptates corporis voluptate.
        Eius nihil tempore aspernatur praesentium eveniet similique quibusdam autem, soluta natus sunt maiores facere possimus ipsa sequi deserunt molestiae rem ipsam dolorem voluptatem illum ex? Eligendi saepe quos unde dolor?
        Dicta, est reprehenderit, eaque placeat libero excepturi veritatis earum, neque impedit possimus perferendis. Voluptate labore necessitatibus sequi adipisci, reprehenderit asperiores hic facilis eaque illum error et omnis cumque ea nemo!
        In tempore, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut consectetur accusantium perspiciatis. Officia, ad! Explicabo laborum praesentium et pariatur consectetur. Omnis est nobis veritatis cum ducimus, ullam officiis harum?
        Cumque corrupti voluptatem, iusto exercitationem officiis quia expedita vero. Nobis excepturi doloremque aspernatur. Tempore, deserunt? Mollitia modi dolorem corrupti necessitatibus nesciunt atque, voluptatum, dignissimos illum quisquam ad earum. Blanditiis, quos.
        Qui, esse aliquam odit, impedit quas in, deleniti unde excepturi ducimus amet repellat rem debitis! Aut nihil delectus reprehenderit fugiat odio repellat, voluptate dolor doloribus autem unde id ducimus recusandae.
        Eveniet veritatis eligendi labore ad sint aliquid totam nisi aut cumque? Porro accusantium laborum eaque quisquam fugiat odit est veritatis, sunt eligendi deserunt ab impedit fugit maiores iure similique quis!
        Id ducimus ut optio quaerat quo alias quas temporibus consequuntur itaque et autem similique, quasi omnis vero aperiam facere laudantium nam exercitationem dolores fugit molestias. Dicta amet dolores blanditiis id?
        Blanditiis veritatis magnam enim cum quis cupiditate sequi quisquam doloribus, eos distinctio maxime. Aperiam odit ab veniam nisi. Beatae quis distinctio eum harum officia iste maxime vitae cupiditate voluptatum blanditiis!
        Reiciendis expedita consequatur sit animi commodi ad reprehenderit perspiciatis facere quisquam nobis, enim nulla, sunt voluptates! Alias sed repellendus, id exercitationem consequatur ipsum debitis nesciunt dolor quos dignissimos? Dolor, beatae.
        Aliquam, nisi commodi hic enim accusantium porro ducimus ut perspiciatis autem maxime animi in laudantium consequuntur numquam, fugit cumque, error quis quod nobis repudiandae! Sed repellendus nisi a accusamus cupiditate?
        Non, tempore? Repudiandae porro provident eveniet similique, molestiae quis nulla, cumque ab dignissimos necessitatibus inventore ut in suscipit minima, dolorum doloribus reprehenderit expedita? In temporibus eaque, vitae numquam aspernatur ex.
        Ratione soluta natus totam optio rerum dicta eaque quos laboriosam expedita, tenetur aut illo dolor facilis nulla tempora explicabo laudantium assumenda tempore corrupti adipisci mollitia ex omnis nesciunt iusto! Blanditiis.
        Sed unde veniam nemo eveniet magni laboriosam eligendi molestiae temporibus? Distinctio aperiam voluptates alias asperiores ducimus aut quo nihil voluptate consequuntur corrupti, eos reiciendis fugit minus illo soluta dolores eveniet.
        Illum iste eum aliquid error tempora, obcaecati odio molestiae cum animi officia perspiciatis mollitia possimus minima, placeat atque ipsa eius facilis optio minus reprehenderit quam dolore laudantium. Dolor, aut commodi.
        Ex corrupti facere nostrum? Exercitationem quas accusamus alias officia ab! Incidunt mollitia enim doloremque veniam error, consectetur non recusandae adipisci unde est quos, id ipsa officia accusantium, dolorem quibusdam reprehenderit?
        Eum odit quae, aperiam aut magni totam soluta laboriosam veniam autem optio maiores aliquid modi rerum nisi expedita qui praesentium doloribus debitis odio eaque vel. Excepturi quidem corrupti cupiditate. Distinctio.
        Amet adipisci, eveniet fuga ipsam odit ex quos ab, quo atque ad laboriosam similique temporibus id vitae. Facilis consectetur corporis accusamus distinctio quaerat, non rerum, iure dignissimos culpa, esse iusto!
        Temporibus quia soluta, error aliquam reprehenderit sint eligendi provident fugiat ex numquam adipisci. Sunt, autem exercitationem! Tenetur totam aliquam, reiciendis animi repellat quam laboriosam, consequuntur nihil repudiandae fugiat molestiae deleniti?
        Hic praesentium veniam dicta corporis quis illum omnis voluptatem a laboriosam explicabo delectus modi impedit ducimus officiis culpa optio asperiores, doloremque cum fugit id vero magnam iusto vel. Minus, maxime.
        Excepturi consequuntur nisi hic, ipsa obcaecati omnis illum libero dolorem. Tenetur vero consequatur dignissimos ad, error in libero ea ducimus, velit alias accusantium dolore. Ipsum voluptas ipsa vel deserunt sapiente!
        Blanditiis, quaerat temporibus deleniti vitae nostrum eius eaque delectus ipsam perferendis odio! Delectus cupiditate laudantium consequatur quam. Perspiciatis ipsam debitis voluptates, ducimus earum porro sapiente error molestias autem enim expedita.
        Ducimus voluptatibus veritatis neque est natus nostrum maxime dolorem repellat voluptate atque reiciendis, recusandae voluptates consectetur vero magni, nesciunt numquam maiores perferendis, beatae enim omnis nemo pariatur dicta a. Reiciendis.
        Eaque asperiores, aliquid odit sapiente, eius veniam laboriosam dolor magni aut ipsum quos? Debitis distinctio voluptatibus, quisquam ratione beatae eius quam animi doloribus molestias temporibus voluptatum fugit aspernatur cumque quas.
        Perspiciatis dolor, aliquam debitis quasi cupiditate consequuntur sequi omnis ipsam nobis veniam, architecto dolorem reprehenderit illum optio fuga ea incidunt. Repudiandae numquam rerum fugit corrupti minus dolorem quos vitae in.
        Repellat ipsa dicta molestias fugit. Eaque cupiditate excepturi maxime praesentium. Et, nobis maxime! Deleniti vel suscipit quae nemo veritatis deserunt accusantium, quis exercitationem ratione maxime, mollitia totam, sint repellendus provident?
        Quasi, hic est. Veniam sequi quod sunt. Repudiandae velit dolore iste neque. Quod culpa facere, beatae nemo earum, quasi rem optio provident architecto recusandae, at deserunt sint autem eaque nisi.
        Animi repellat dicta sit cum distinctio? Enim dicta dolores maxime velit deleniti nulla voluptas inventore tempora explicabo aperiam itaque autem minus quia aliquid consequuntur, repellendus eaque assumenda illum at dolor?
        Commodi itaque mollitia est cum et reprehenderit praesentium amet quibusdam quasi necessitatibus rem placeat, veniam animi obcaecati eligendi natus suscipit ut! Voluptates fuga exercitationem quo corporis consectetur fugit eius voluptatibus!
        Doloribus itaque soluta eum autem esse rerum laudantium mollitia voluptates reprehenderit enim. Suscipit quasi mollitia quae eius perferendis dignissimos ut praesentium placeat accusantium ipsam harum debitis iusto, at sequi. Expedita?
        Praesentium veniam magnam labore quis iste incidunt sit? Sint quidem cumque odio velit vero pariatur iusto mollitia, blanditiis minima, quaerat maxime molestiae. Delectus dolorem molestias vel rem ad exercitationem incidunt.
        Voluptatum nihil error libero esse magnam voluptatibus praesentium, rem totam quam vel earum animi molestias neque, soluta temporibus repellendus laborum, perspiciatis optio! Excepturi nobis alias, commodi ab minus voluptas quis.
        Magnam necessitatibus ab repellendus velit, sunt dicta nulla autem dignissimos totam ea quam iste soluta ratione! Maiores consequatur ad nihil doloremque, aperiam dolore blanditiis eveniet nisi nam obcaecati voluptate eum! nulla delectus neque sit cum doloribus beatae magnam aperiam. Magni numquam quidem labore nisi quam, voluptatibus aspernatur, molestias vel officia voluptatum nesciunt? Dolore cupiditate accusamus quis quo impedit.
     </p>
    </section>

      <section ref={projectRef}>
     <h2>Project</h2>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam accusamus sed corrupti nihil, eaque molestias, nobis labore obcaecati, debitis quas minus ex? Eos maiores animi repudiandae voluptatem soluta, dolor accusantium.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rerum harum ratione porro sunt incidunt dolorum vero. Dignissimos sapiente alias ipsam nisi eius quas. Quasi, aut animi! Velit, reprehenderit quis.
        Reiciendis, veniam assumenda! Consectetur doloremque sit delectus cupiditate. Commodi excepturi quaerat animi doloribus quas eaque. Cumque, nesciunt doloremque laborum sapiente fugit ex, ea eligendi quaerat omnis quia voluptates corporis voluptate.
        Eius nihil tempore aspernatur praesentium eveniet similique quibusdam autem, soluta natus sunt maiores facere possimus ipsa sequi deserunt molestiae rem ipsam dolorem voluptatem illum ex? Eligendi saepe quos unde dolor?
        Dicta, est reprehenderit, eaque placeat libero excepturi veritatis earum, neque impedit possimus perferendis. Voluptate labore necessitatibus sequi adipisci, reprehenderit asperiores hic facilis eaque illum error et omnis cumque ea nemo!
        In tempore, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut consectetur accusantium perspiciatis. Officia, ad! Explicabo laborum praesentium et pariatur consectetur. Omnis est nobis veritatis cum ducimus, ullam officiis harum?
        Cumque corrupti voluptatem, iusto exercitationem officiis quia expedita vero. Nobis excepturi doloremque aspernatur. Tempore, deserunt? Mollitia modi dolorem corrupti necessitatibus nesciunt atque, voluptatum, dignissimos illum quisquam ad earum. Blanditiis, quos.
        Qui, esse aliquam odit, impedit quas in, deleniti unde excepturi ducimus amet repellat rem debitis! Aut nihil delectus reprehenderit fugiat odio repellat, voluptate dolor doloribus autem unde id ducimus recusandae.
        Eveniet veritatis eligendi labore ad sint aliquid totam nisi aut cumque? Porro accusantium laborum eaque quisquam fugiat odit est veritatis, sunt eligendi deserunt ab impedit fugit maiores iure similique quis!
        Id ducimus ut optio quaerat quo alias quas temporibus consequuntur itaque et autem similique, quasi omnis vero aperiam facere laudantium nam exercitationem dolores fugit molestias. Dicta amet dolores blanditiis id?
        Blanditiis veritatis magnam enim cum quis cupiditate sequi quisquam doloribus, eos distinctio maxime. Aperiam odit ab veniam nisi. Beatae quis distinctio eum harum officia iste maxime vitae cupiditate voluptatum blanditiis!
        Reiciendis expedita consequatur sit animi commodi ad reprehenderit perspiciatis facere quisquam nobis, enim nulla, sunt voluptates! Alias sed repellendus, id exercitationem consequatur ipsum debitis nesciunt dolor quos dignissimos? Dolor, beatae.
        Aliquam, nisi commodi hic enim accusantium porro ducimus ut perspiciatis autem maxime animi in laudantium consequuntur numquam, fugit cumque, error quis quod nobis repudiandae! Sed repellendus nisi a accusamus cupiditate?
        Non, tempore? Repudiandae porro provident eveniet similique, molestiae quis nulla, cumque ab dignissimos necessitatibus inventore ut in suscipit minima, dolorum doloribus reprehenderit expedita? In temporibus eaque, vitae numquam aspernatur ex.
        Ratione soluta natus totam optio rerum dicta eaque quos laboriosam expedita, tenetur aut illo dolor facilis nulla tempora explicabo laudantium assumenda tempore corrupti adipisci mollitia ex omnis nesciunt iusto! Blanditiis.
        Sed unde veniam nemo eveniet magni laboriosam eligendi molestiae temporibus? Distinctio aperiam voluptates alias asperiores ducimus aut quo nihil voluptate consequuntur corrupti, eos reiciendis fugit minus illo soluta dolores eveniet.
        Illum iste eum aliquid error tempora, obcaecati odio molestiae cum animi officia perspiciatis mollitia possimus minima, placeat atque ipsa eius facilis optio minus reprehenderit quam dolore laudantium. Dolor, aut commodi.
        Ex corrupti facere nostrum? Exercitationem quas accusamus alias officia ab! Incidunt mollitia enim doloremque veniam error, consectetur non recusandae adipisci unde est quos, id ipsa officia accusantium, dolorem quibusdam reprehenderit?
        Eum odit quae, aperiam aut magni totam soluta laboriosam veniam autem optio maiores aliquid modi rerum nisi expedita qui praesentium doloribus debitis odio eaque vel. Excepturi quidem corrupti cupiditate. Distinctio.
        Amet adipisci, eveniet fuga ipsam odit ex quos ab, quo atque ad laboriosam similique temporibus id vitae. Facilis consectetur corporis accusamus distinctio quaerat, non rerum, iure dignissimos culpa, esse iusto!
        Temporibus quia soluta, error aliquam reprehenderit sint eligendi provident fugiat ex numquam adipisci. Sunt, autem exercitationem! Tenetur totam aliquam, reiciendis animi repellat quam laboriosam, consequuntur nihil repudiandae fugiat molestiae deleniti?
        Hic praesentium veniam dicta corporis quis illum omnis voluptatem a laboriosam explicabo delectus modi impedit ducimus officiis culpa optio asperiores, doloremque cum fugit id vero magnam iusto vel. Minus, maxime.
        Excepturi consequuntur nisi hic, ipsa obcaecati omnis illum libero dolorem. Tenetur vero consequatur dignissimos ad, error in libero ea ducimus, velit alias accusantium dolore. Ipsum voluptas ipsa vel deserunt sapiente!
        Blanditiis, quaerat temporibus deleniti vitae nostrum eius eaque delectus ipsam perferendis odio! Delectus cupiditate laudantium consequatur quam. Perspiciatis ipsam debitis voluptates, ducimus earum porro sapiente error molestias autem enim expedita.
        Ducimus voluptatibus veritatis neque est natus nostrum maxime dolorem repellat voluptate atque reiciendis, recusandae voluptates consectetur vero magni, nesciunt numquam maiores perferendis, beatae enim omnis nemo pariatur dicta a. Reiciendis.
        Eaque asperiores, aliquid odit sapiente, eius veniam laboriosam dolor magni aut ipsum quos? Debitis distinctio voluptatibus, quisquam ratione beatae eius quam animi doloribus molestias temporibus voluptatum fugit aspernatur cumque quas.
        Perspiciatis dolor, aliquam debitis quasi cupiditate consequuntur sequi omnis ipsam nobis veniam, architecto dolorem reprehenderit illum optio fuga ea incidunt. Repudiandae numquam rerum fugit corrupti minus dolorem quos vitae in.
        Repellat ipsa dicta molestias fugit. Eaque cupiditate excepturi maxime praesentium. Et, nobis maxime! Deleniti vel suscipit quae nemo veritatis deserunt accusantium, quis exercitationem ratione maxime, mollitia totam, sint repellendus provident?
        Quasi, hic est. Veniam sequi quod sunt. Repudiandae velit dolore iste neque. Quod culpa facere, beatae nemo earum, quasi rem optio provident architecto recusandae, at deserunt sint autem eaque nisi.
        Animi repellat dicta sit cum distinctio? Enim dicta dolores maxime velit deleniti nulla voluptas inventore tempora explicabo aperiam itaque autem minus quia aliquid consequuntur, repellendus eaque assumenda illum at dolor?
        Commodi itaque mollitia est cum et reprehenderit praesentium amet quibusdam quasi necessitatibus rem placeat, veniam animi obcaecati eligendi natus suscipit ut! Voluptates fuga exercitationem quo corporis consectetur fugit eius voluptatibus!
        Doloribus itaque soluta eum autem esse rerum laudantium mollitia voluptates reprehenderit enim. Suscipit quasi mollitia quae eius perferendis dignissimos ut praesentium placeat accusantium ipsam harum debitis iusto, at sequi. Expedita?
        Praesentium veniam magnam labore quis iste incidunt sit? Sint quidem cumque odio velit vero pariatur iusto mollitia, blanditiis minima, quaerat maxime molestiae. Delectus dolorem molestias vel rem ad exercitationem incidunt.
        Voluptatum nihil error libero esse magnam voluptatibus praesentium, rem totam quam vel earum animi molestias neque, soluta temporibus repellendus laborum, perspiciatis optio! Excepturi nobis alias, commodi ab minus voluptas quis.
        Magnam necessitatibus ab repellendus velit, sunt dicta nulla autem dignissimos totam ea quam iste soluta ratione! Maiores consequatur ad nihil doloremque, aperiam dolore blanditiis eveniet nisi nam obcaecati voluptate eum! nulla delectus neque sit cum doloribus beatae magnam aperiam. Magni numquam quidem labore nisi quam, voluptatibus aspernatur, molestias vel officia voluptatum nesciunt? Dolore cupiditate accusamus quis quo impedit.
     </p>
    </section>
 <div>
        <button onClick={movetotop}>Move to Top</button>
    </div>

    </>
  )
}

export default Home