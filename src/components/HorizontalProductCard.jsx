import React from "react";
import { useDispatch } from "react-redux";
import {
  decProductQty,
  incProductQty,
  removeFromCartById,
} from "../store/CartSlice";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { addToWishlist } from "../store/WishListSlice";
import toast from "react-hot-toast";

const HorizontalProductCard = (props) => {
  const {
    images,
    title,
    description,
    id,
    name,
    price,
    category,
    instock,
    qty,
  } = props;
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeFromCartById(id));
    toast.success("Removed from cart");
  };
  const moveToWishlists = () => {
    dispatch(removeFromCartById(id));
    dispatch(addToWishlist(props));
    toast.success("Moved to wishlist");
  };
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={images[0]}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2" className="line-clamp-2">
              {description}
            </Text>
            <div className="flex flex-row gap-4 items-center">
              {" "}
              <IconButton
                onClick={() => dispatch(decProductQty(id))}
                size={"sm"}
                aria-label="Add to friends"
                icon={<MinusIcon />}
              />
              <p className="border border-black w-6 h-6 p-2 rounded-full flex items-center justify-center">
                {qty}
              </p>
              <IconButton
                onClick={() => dispatch(incProductQty(id))}
                size={"sm"}
                aria-label="Add to friends"
                icon={<AddIcon />}
              />{" "}
            </div>
          </CardBody>

          <CardFooter className="flex  flex-row gap-4">
            <Button onClick={removeFromCart} variant="solid" colorScheme="blue">
              Remove from cart
            </Button>
            <Button
              onClick={moveToWishlists}
              variant="solid"
              colorScheme="blue"
            >
              Move to wishlists
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default HorizontalProductCard;
