"use client";

import { useRouter } from "next/navigation";

import { User } from "../../../../payload-types";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Switch,
  useDisclosure,
} from "@nextui-org/react";

import { useState } from "react";
import { Menu } from "react-feather";
import { setStopRunningEvents as setStopRunningEventsServer } from "../serverActions/userActions";

type MenuBarProps = {
  user: User;
};

export default function MenuBar({ user }: MenuBarProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const router = useRouter();

  const [stopRunningEvents, setStopRunningEvents] = useState(
    Boolean(user.stopRunningEvents)
  );

  return (
    <footer className="sticky bottom-0 z-20 p-4 bg-black bg-opacity-30 backdrop-blur-xl flex flex-row-reverse rounded-t-large">
      <Button onPress={onOpen} isIconOnly>
        <Menu />
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        size="xs"
      >
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1">
            Tracker
            <Button
              onPress={async () => {
                await fetch(window.location.origin + "/api/users/logout", {
                  method: "POST",
                });

                router.replace("/tracker/login");
              }}
            >
              Logout
            </Button>
          </DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter>
            <Switch
              isSelected={stopRunningEvents}
              onValueChange={async (value) => {
                setStopRunningEvents(await setStopRunningEventsServer(value));
              }}
            >
              Stop running Event
            </Switch>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
