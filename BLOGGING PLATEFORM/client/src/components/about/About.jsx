
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import Footer from '../footer/footer';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #0b0bf3;
`;
const Texta = styled(Typography)`
    color: #030303;
`;
const Icon = styled(Link)`
    color: #fa0707;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Tech Blog founder (GPS)</Typography>
                <Texta variant="h5">"Hello there, lovely readers! I'm Gyan Pratap Singh, a passionate B.Tech student with a heart full of words and a mind bursting with ideas. Welcome to my corner of the internet where technology meets creativity and curiosity knows no bounds.
                <br />

                    As I navigate the fascinating world of engineering, I've found solace in expressing my thoughts and experiences through the art of blogging. Join me on this journey as I unravel the complexities of circuits and equations while weaving them into relatable stories and insightful articles. 
                    <br />

                    Beyond the realm of textbooks and coding challenges, I'm a firm believer that life as a student is a treasure trove of stories waiting to be shared. From late-night study sessions to eureka moments in the lab, I'm here to paint the vibrant hues of campus life onto this digital canvas.
                    <br />

                    But this blog isn't just about me—it's about us. As we navigate the maze of academia together, I'm dedicated to providing you with valuable insights, tips for mastering the art of time management, and a sprinkle of humor to keep those stress levels in check.
                    <br />

                    So, whether you're a fellow student seeking some camaraderie in this wild academic ride or simply a curious soul intrigued by the fusion of technology and blogging, I invite you to hit that follow button. Let's embark on this adventure, one blog post at a time.
                    <br />
                    Thank you for joining me on this unique journey of blending the rigors of B.Tech studies with the boundless world of blogging. Stay curious, stay inspired, and let's create something extraordinary together."
                    <br />
                    Feel free to personalize and modify the introduction to match your style and voice as a blogger. This introduction sets the tone for your blog, showcasing your identity as both a B.Tech student and a creative blogger while inviting your audience to join you on your unique journey.
                    <br />
                    I'm a Software Engineer based in India. 
                    I've built websites, desktop applications and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Icon href="https://github.com/Gyanthakur" color="inherit" target="_blank"><GitHub /></Icon>
                    </Box>
                </Texta>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Icon href="https://www.instagram.com/gp.singh.ro.ckstar4438/" color="inherit" target="_blank">
                            <Instagram />
                        </Icon>
                    </Box>  
                        or send me an Email 
                        <Icon href="mailto:gps.96169@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Icon>.
                </Text>
            </Wrapper>
            <Footer/>
        </Box>
    )
}

export default About;