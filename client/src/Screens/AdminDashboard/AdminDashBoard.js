import React from 'react'
import styled from 'styled-components'

// icons

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Sidebar from '../../Components/Sidebar/Sidebar';




// styled components

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

const SetDashBoard = styled.div`
    padding-top: 10%;
`

const DashBoardContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
padding: 1rem 0;
border-bottom: 1px solid rgba(190,190,190,0.22);
cursor: pointer;
background-color: ${({ theme }) => theme.primary};
transition: all ease-in-out 300ms;

&:hover {
/* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
background-color: ${({ theme }) => theme.secondary};
}

@media (max-width: 768px) {
    flex-direction: column;
}
`

const Text = styled.h1`
font-size: 0.8rem;
font-weight: 500;
color: ${({ theme }) => theme.textColor};
margin: 0;
`

const Subtitle = styled(Text)`
font-size: 0.6rem;
color: #B2BFE1;
margin-top: 2px;
`

const GridItemLarge = styled.div`
width: 30%;
display: flex;
align-items: center;
`

const GridFlexItemColumn = styled.div`
display: flex;
flex-direction: column;
margin-left: 1rem;
`

const ProfileImg = styled.img`
height: 35px;
width: 35px;
`
const Username = styled(Text)`
font-size: 1rem;
`
const GridItemColumn = styled(Text)`
width: 15%;
`

const AdminDashBoard = () => {

   

    return (
        <div>
            <Sidebar/>

            <Container>
                <SetDashBoard>
                    <DashBoardContainer>
                        <GridItemLarge>
                            <ProfileImg />
                            <GridFlexItemColumn>
                                <Username>
                                    <AccountBoxIcon />
                                </Username>
                                <Subtitle>Username</Subtitle>
                            </GridFlexItemColumn>
                        </GridItemLarge>
                        <GridItemColumn>
                            Department
                        </GridItemColumn>

                        <GridItemColumn>
                            <AssignmentIcon/>
                            <br/> View Task
                        </GridItemColumn>

                        <GridItemColumn>
                            <EditIcon />
                            <br/> Edit User
                        </GridItemColumn>

                        <GridItemColumn>
                            <FiberManualRecordIcon/>
                            <br/> Online?
                        </GridItemColumn>
                    
                    </DashBoardContainer>
                </SetDashBoard>
            </Container>
        </div>
    )
}

export default AdminDashBoard;
