import React from 'react';
import styled from 'styled-components';
import content from './content.module.css';

const Content = (props) => {
  return (
    <Wrapper>
      <div className={content.addPost}>
        <div className={content.avatar}>
          <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user-avatar" />
        </div>
        <form name="add_post" action="#">
          <textarea id="userPost" name="user_post" rows="2" cols="30" placeholder="Напишите, что вы думаете"></textarea>
          <i class="far fa-edit"></i>
          <i class="far fa-images"></i>
          <i class="fas fa-video"></i>
          <i class="fas fa-map-marked-alt"></i>
          <button>Опубликовать</button>
        </form>
      </div>
      <div className={content.text}>
        <h2>Какой то текст для тэста</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quis autem labore, quod doloremque animi maxime. Nobis ab, dignissimos sint quibusdam aliquid praesentium enim deleniti exercitationem quas quae amet alias molestias deserunt officia ipsam tempora fugiat eum perspiciatis, tempore assumenda sapiente facilis architecto numquam. Rerum corrupti iure, explicabo atque quos error laudantium ex nam accusamus similique mollitia veniam dolorem omnis temporibus. Ratione consequatur aliquam illum. Quidem, deserunt. Eum quibusdam eligendi odit facere nihil hic non nobis minus mollitia, cumque provident ex sit perspiciatis praesentium maiores, accusantium corporis quam, nisi iste est quas aliquam animi? Molestias fugit earum blanditiis odio eveniet autem debitis quam laboriosam recusandae quod voluptatibus hic, culpa illum! In, sunt. Necessitatibus, cumque! Suscipit incidunt obcaecati repellat nesciunt mollitia quae dolore nobis, cum, laudantium quasi, sit corrupti. Libero aliquam cumque, explicabo nostrum ex, mollitia velit voluptatum molestiae quidem vitae iste blanditiis iusto dolor quia dolorem iure. Minima, modi. Cupiditate, nostrum? Quod ullam nulla porro laudantium amet minus eius odit quasi ratione dolor qui nemo expedita, voluptatibus temporibus impedit! Ipsam, possimus. Laborum esse fuga consequuntur incidunt cum voluptatum accusantium nesciunt quo temporibus accusamus? Autem ipsam, rem esse explicabo officiis harum eaque molestiae possimus maiores voluptates omnis placeat velit quibusdam, debitis non totam nostrum sequi. Laboriosam a nemo labore tenetur, sequi corporis? Sit nam quod numquam doloremque voluptatibus praesentium molestias labore odio, consequuntur, dolore hic quas. Magnam nihil tempora ratione error id possimus quas sunt illum porro culpa deleniti laborum et adipisci explicabo molestias incidunt perspiciatis aliquid impedit asperiores expedita, soluta dicta praesentium voluptatum. Ea provident corporis nobis! Cum similique quaerat dolore mollitia veritatis minus odit? Exercitationem, architecto atque blanditiis, velit cumque sint ullam, impedit perspiciatis quis quo eaque eveniet quisquam beatae odit modi culpa doloremque voluptas! Omnis sed nulla et harum sunt. Nisi numquam enim placeat voluptatem voluptatum quis quod.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  grid-area: main;
  background: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`;

export default Content;