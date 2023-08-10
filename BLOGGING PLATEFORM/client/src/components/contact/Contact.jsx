
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email,LinkedIn } from '@mui/icons-material';
import Footer from '../footer/footer';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #b3adad;
`;
const Icon = styled(Link)`
    color: #df0f0f;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    <Icon href="https://www.instagram.com/gp.singh.ro.ckstar4438/" color="inherit" target="_blank">
                        <Instagram/>
                    </Icon>
                    Reach out to me on
                    <Icon href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Icon>
                    Reach out to me on
                    <Icon href="https://www.github.com/Gyanthakur/" color="inherit" target="_blank">
                        <GitHub/>
                    </Icon>
                    or send me an Email 
                    <Icon href="mailto:gps.96169@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Icon>.
                </Text>
            </Wrapper>
            <Footer/>
        </Box>
    );
}

export default Contact;