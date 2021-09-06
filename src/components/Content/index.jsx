import React from 'react';
import styled from 'styled-components';
import content from './content.module.css';

const Content = (props) => {
  return (
    <Wrapper>
      <AddPost>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user-avatar" />
        </Avatar>
        <form name="add_post" action="#">
          <textarea id="userPost" name="user_post" rows="2" cols="30" placeholder="Напишите, что вы думаете"></textarea>
          <FontAwesomeIcon nameClass="far fa-edit"/>
          <FontAwesomeIcon nameClass="far fa-images"/>
          <FontAwesomeIcon nameClass="fas fa-video"/>
          <FontAwesomeIcon nameClass="fas fa-map-marked-alt"/>
          <button>Опубликовать</button>
        </form>
      </AddPost>
      <div className={content.text}>
        <h2>Какой то текст для тэста</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quis autem labore, quod doloremque animi maxime. Nobis ab, dignissimos sint quibusdam aliquid praesentium enim deleniti exercitationem quas quae amet alias molestias deserunt officia ipsam tempora fugiat eum perspiciatis, tempore assumenda sapiente facilis architecto numquam. Rerum corrupti iure, explicabo atque quos error laudantium ex nam accusamus similique mollitia veniam dolorem omnis temporibus. Ratione consequatur aliquam illum. Quidem, deserunt. Eum quibusdam eligendi odit facere nihil hic non nobis minus mollitia, cumque provident ex sit perspiciatis praesentium maiores, accusantium corporis quam, nisi iste est quas aliquam animi? Molestias fugit earum blanditiis odio eveniet autem debitis quam laboriosam recusandae quod voluptatibus hic, culpa illum! In, sunt. Necessitatibus, cumque! Suscipit incidunt obcaecati repellat nesciunt mollitia quae dolore nobis, cum, laudantium quasi, sit corrupti. Libero aliquam cumque, explicabo nostrum ex, mollitia velit voluptatum molestiae quidem vitae iste blanditiis iusto dolor quia dolorem iure. Minima, modi. Cupiditate, nostrum? Quod ullam nulla porro laudantium amet minus eius odit quasi ratione dolor qui nemo expedita, voluptatibus temporibus impedit! Ipsam, possimus. Laborum esse fuga consequuntur incidunt cum voluptatum accusantium nesciunt quo temporibus accusamus? Autem ipsam, rem esse explicabo officiis harum eaque molestiae possimus maiores voluptates omnis placeat velit quibusdam, debitis non totam nostrum sequi. Laboriosam a nemo labore tenetur, sequi corporis? Sit nam quod numquam doloremque voluptatibus praesentium molestias labore odio, consequuntur, dolore hic quas. Magnam nihil tempora ratione error id possimus quas sunt illum porro culpa deleniti laborum et adipisci explicabo molestias incidunt perspiciatis aliquid impedit asperiores expedita, soluta dicta praesentium voluptatum. Ea provident corporis nobis! Cum similique quaerat dolore mollitia veritatis minus odit? Exercitationem, architecto atque blanditiis, velit cumque sint ullam, impedit perspiciatis quis quo eaque eveniet quisquam beatae odit modi culpa doloremque voluptas! Omnis sed nulla et harum sunt. Nisi numquam enim placeat voluptatem voluptatum quis quod.
        </p>
      </div>
    </Wrapper>
  )
};

const FontAwesomeIcon = (props) => {
  return (
    <i className={props.nameClass}></i>
  )
};


const Wrapper = styled.section`
  grid-area: main;
  background: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`;
const AddPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid rgba(204, 204, 204, 0.4);

  & form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  & form textarea {
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    height: auto;
    border-radius: 4px;
    color: #939598;
    width: 100%;
    font-family: "Montserrat Alternates", sans-serif;
    outline: 0;
    outline-offset: 0;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 140%;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    resize: vertical;
    margin-right: 10px;
    transition: all ease-in-out 150ms;
  }
  & form i {
    color: #6d6e71;
    font-size: 16px;
    margin: 0 5px;
    cursor: pointer;
    transition: all 150ms ease-in-out 0ms;
  }
  & form i:hover {
    color: #159bca;
  }
  & form button {
    cursor: pointer;
    line-height: 140%;
    text-align: center;
    background: #159bca;
    padding: 10px 10px;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 600;
    margin-left: 10px;
    transition: all 250ms ease-in 0ms;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1),
                0px 0px 10px 0px rgba(0, 0, 0, 0.1),
                0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
  & form button:hover {
    background: #1487b1;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2),
                0px 0px 10px 0px rgba(0, 0, 0, 0.1),
                0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
`;
const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1),
              0px 0px 10px 0px rgba(0, 0, 0, 0.1),
              0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export default Content;