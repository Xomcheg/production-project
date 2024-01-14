/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('О сайте')}</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem laboriosam,
                sit laborum animi aut esse dolore deleniti blanditiis unde commodi, ullam
                cupiditate, labore nulla fuga vel praesentium aliquid magnam!
                Est, vel. Quam nobis, nostrum voluptatum in ipsa odio eum perspiciatis dolor
                quaerat earum obcaecati placeat iure, fuga, voluptatibus reiciendis? Nostrum
                laboriosam voluptates corrupti ex non iure odit quos laudantium!
                Ipsum voluptatum, nesciunt impedit dolores, pariatur, accusamus enim omnis
                tempora voluptas quibusdam consequuntur harum repudiandae unde vel iusto
                inventore quam repellat ullam quia explicabo! Tenetur facere enim ut minima maiores.
                Ipsum dolores ex quia quas dolor praesentium doloribus minus incidunt.
                Sapiente rem, perspiciatis fuga ex eum totam! Aperiam dolore, dolores atque
                sit, dignissimos est porro voluptatibus, adipisci quia nesciunt expedita?
                Laudantium ipsum animi aliquam iste culpa sequi fugit mollitia deserunt quae
                ab quaerat quidem repellendus atque itaque nesciunt, nemo consectetur assumenda
                veritatis. Possimus excepturi omnis officia vero nisi earum pariatur.
                Enim nesciunt veniam tempore voluptatum cum ab atque, laborum voluptatem at,
                debitis voluptates dolore, odit nihil facere aliquid est! Numquam deserunt
                voluptates facere. Eligendi dignissimos minus ducimus aliquam velit incidunt?
                Aliquid illo qui amet, illum labore natus quasi nostrum repellendus aliquam
                rem fuga quaerat atque non. Culpa accusamus ea, repudiandae fugit eos suscipit
                dicta, aut deserunt, vitae laudantium eveniet cupiditate.
                unt ipsa earum in soluta, praesentium eaque veniam architecto fugiat quam? Modi,
                suscipit delectus?
                Animi itaque harum libero deserunt, ea incidunt at veniam quam, tempora aliquam
                nam non, dolor pariatur dolore molestias dicta! Magnam, laboriosam? Quis eveniet,
                sunt inventore autem eius pariatur quam modi!
                usdam, iste quo eveniet repudiandae aut hic, asperiores aliquid natus, corporis
                nihil molestias temporibus saepe!
            </div>
        </div>
    );
};

export default AboutPage;
