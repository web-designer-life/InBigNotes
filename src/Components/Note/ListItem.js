import React from 'react';
import styled from 'styled-components';
import Checkbox from "react-custom-checkbox";

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 50px; 
`;

const Item = styled.li`
    position: relative;
    list-style-type: none;
    width: 440px;
    height: 250px;
    margin: 50px 0 0 0;
    padding: 30px;
    background: #FFFFFF;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    &:hover {
        cursor: pointer;
    }
`;

const ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemTitle = styled.h3`
    height: 61px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    margin: 0;
    color: #5A5A5A;
`;

const ItemText = styled.p`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 27px;
    margin: 20px 0 0 0;
    color: #787878;
`;

export const ListItem = ({ itemList }) => (
    <List>
        {itemList.map(item =>(
            <Item
                key={item.id}
            >
                <ItemHeader>
                    <ItemTitle>{item.title}</ItemTitle>
                    <Checkbox
                        checked={false}
                        icon={<img src={require("../../../public/assets/icons/arrow.png")} style={{ width: 54 }} />}
                        borderColor="#0047FF"
                        borderWidth={5}
                        borderRadius={20}
                        size={80}
                        style={{ cursor: "pointer" }}
                    />
                </ItemHeader>
                <ItemText>{item.text}</ItemText>
            </Item>
        ))}
    </List>
);