import Image from "next/image";
import classes from "./userProfilePage.module.css";
import prisma from "./../../../lib/prisma";
import { Suspense } from "react";
import Loading from "../../../loading";

import { revalidatePath } from "next/cache";
export default async function userProfilePage({ params }) {
  const userId = Number(params.id);
  const userInfo = await prisma.user.findUnique({ where: { id: userId } });

  const updateUser = async (formdata) => {
    "use server";

    const username = formdata.get("username");
    const email = formdata.get("email");
    const phone = formdata.get("phone");
    const address = formdata.get("address");
    const isAdmin = Boolean(formdata.get("isAdmin"));
    const isActive = Boolean(formdata.get("isActive"));
    const password = formdata.get("password");

    await prisma.user.update({
      where: { id: userId },
      data: { username, email, phone, address, isActive, isAdmin, password },
    });
    revalidatePath(`dashboard/users/${userId}`);
  };
  return (
    <Suspense fallback={<Loading />}>
      <form className={classes.container} action={updateUser}>
        <div className={classes.infoContainer}>
          <div className={classes.imgContainer}>
            <Image
              src={userInfo.img || "/noavatar.png"}
              alt={`${userInfo.username} profile image`}
              width={150}
              height={100}
              className={classes.image}
            />
          </div>
          {userInfo.username}
        </div>
        <div className={classes.formContainer}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder={userInfo.username}
            className={classes.input}
            defaultValue={userInfo.username}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder={userInfo.email}
            className={classes.input}
            defaultValue={userInfo.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            className={classes.input}
            defaultValue={userInfo.password}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={userInfo.phone}
            className={classes.input}
            defaultValue={userInfo.phone}
          />
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            rows={2}
            placeholder={userInfo.address}
            className={classes.input}
            defaultValue={userInfo.address}
          ></textarea>
          <label htmlFor="isAdmin">Is admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className={classes.input}
            defaultValue={userInfo.isAdmin}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is active?</label>
          <select
            name="isActive"
            className={classes.input}
            defaultValue={userInfo.isActive}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={classes.btn} type="submit">
            Update
          </button>
        </div>
      </form>
    </Suspense>
  );
}
