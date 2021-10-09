import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='vippro' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Tại NT Shop, tất cả sản phẩm trang trí nội thất & giải pháp không
            gian sống không chỉ đơn thuần tuân thủ theo ngôn ngữ giản lược của
            Minimalism, mà còn cân bằng được tính năng và độ thẩm mỹ cần có. “Ít
            tức là nhiều", nhưng mỗi chi tiết xuất hiện trên thiết kế đều là một
            sự chăm chút kỹ lưỡng và hoàn hảo. Và đó cũng chính là tôn chỉ hoạt
            động của NT Shop. Với tinh thần cầu tiến luôn cố gắng hết mình để
            cung cấp những sản phẩm chất lượng cộng với dịch vụ thân thiện cho
            khách hàng, chúng tôi hy vọng có thể chia sẻ một niềm tin cố hữu với
            tất cả mọi người: “Cuộc sống sẽ trở nên tốt đẹp hơn khi không gian
            sống được quan tâm và đầu tư đúng mực.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
