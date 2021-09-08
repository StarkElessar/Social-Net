import React from "react";
import styled from "styled-components";
import { AddPost, Avatar } from "./StyledComponents";
import FontAwesomeIcon from "./small-components/FontAwesomeIcon";

const MyPosts = (props) => {
  return (
    <Wrapper>
      <AddPost>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user-avatar" />
        </Avatar>
        <form name="add_post" action="#">
          <textarea id="userPost" name="user_post" rows="2" cols="30" placeholder="Напишите, что вы думаете"></textarea>
          <FontAwesomeIcon nameClass="far fa-edit" />
          <FontAwesomeIcon nameClass="far fa-images" />
          <FontAwesomeIcon nameClass="fas fa-video" />
          <FontAwesomeIcon nameClass="fas fa-map-marked-alt" />
          <button>Опубликовать</button>
        </form>
      </AddPost>
      <AllPosts>
        <h2>Это тестовый текст</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae itaque neque? Amet dicta officia accusamus modi distinctio dolores aperiam ratione perspiciatis, facilis eaque vero reprehenderit beatae labore architecto culpa esse voluptatum. Totam officiis minus consequatur alias reiciendis nulla consectetur perferendis doloremque nisi quae, tempora eveniet sit nobis, recusandae odio nemo modi, esse harum eaque iste optio! Repudiandae veritatis iure perferendis soluta placeat rerum eveniet ullam odit atque voluptatem laborum numquam assumenda id quam possimus, perspiciatis dolorem vel quis voluptate odio explicabo quia corrupti sequi? Distinctio, quaerat. Voluptatem ipsa molestias molestiae eos nulla a, doloremque totam fugit quam, laudantium explicabo. Possimus dolore aperiam totam adipisci quisquam pariatur, numquam cum amet aliquam similique consectetur odio maiores dolores quasi a blanditiis ipsa. Molestiae totam suscipit necessitatibus odio vel corporis ut, nobis, ad placeat numquam a accusamus ipsum vitae cum quidem delectus ducimus quis soluta. Molestias enim modi nulla deserunt molestiae error quo dolorem neque ducimus voluptate alias nemo, consequatur exercitationem doloremque aliquam officiis obcaecati, ex delectus voluptates atque, quas provident beatae esse! Autem aliquid officiis, harum laboriosam doloremque quaerat est ex voluptas voluptatibus amet beatae sint explicabo magni inventore recusandae magnam incidunt eum mollitia, ipsum doloribus illo molestiae? Saepe, repudiandae, nesciunt beatae praesentium unde voluptates libero similique inventore minima ad commodi doloremque sequi eligendi blanditiis voluptas, debitis et modi omnis fuga obcaecati possimus facilis? Itaque corporis reiciendis sapiente in! Placeat magnam quisquam culpa facilis, saepe dignissimos excepturi eveniet, totam architecto tenetur repudiandae impedit maxime! Aliquid, distinctio sapiente! Repellat fuga perferendis assumenda ducimus asperiores, facilis error ea optio sapiente dicta voluptatum dolores amet reiciendis natus expedita eligendi consequuntur minima eius. Quos animi ea voluptatum nisi quo accusamus voluptatem, suscipit, illum qui, non veritatis deleniti nam inventore. Saepe, fugiat officiis laborum quibusdam quam cumque placeat, ducimus veniam voluptatem aliquam repellat in earum esse eligendi?
        </p>
      </AllPosts>
    </Wrapper>
    
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AllPosts = styled.div`
  display: flex;
  flex-direction: column;
  & h2 {
    color: #000;
    text-align: center;
    margin-top: 40px;
  }
  & p {
    color: #111;
    font-size: 24px;
  }
`;


export default MyPosts;