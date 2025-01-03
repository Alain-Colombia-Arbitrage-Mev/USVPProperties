import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utilis/decodetoken";
import { useEffect, useState } from "react";


async function userLogged (request) {
  if (request.cookies.get('token'))
    return request.cookies.get('token').value;
} 

const userRole = {
  'USER': 'USER',
  'ADMIN': 'ADMIN',
  // 'SUBADMIN': 'SUBADMIN'  sss
}

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const url = request.nextUrl.clone();
    const token = await userLogged(request);
    console.log('token me', request.cookies);
  
    const userRoutes = [
      "/dashboard-home",
      "/dashboard-my-profile",
      "/dashboard/user/change-password",
    ];
  
    const adminRoutes = [
      "/dashboard-add-property",
      "/dashboard-add-agent"
      // "/dashboard/admin/change-password",
    ];
  
    const superAdminRoutes = [
      ...adminRoutes,
      "/dashboard/super-admin/admins",
      "/dashboard/super-admin/add-admin"
    ];
    if (token) {
      url.pathname = "/login";
  
      const user = verifyToken(token);
      console.log('usertoken: ', user, user.role.name !== userRole.ADMIN);


      
      // if token is expired then redirect to login page
      // if (user.exp < Date.now() / 1000) {
      //   url.pathname = "/signin";
      //   return NextResponse.redirect(url);
      // }
      // if user role is not admin and user is trying to access admin routes then redirect to login page
      // if (
      //   (user.role.name !== userRole.ADMIN || user.role !== userRole.SUPER_ADMIN) &&
      //   (adminRoutes.includes(pathname) || superAdminRoutes.includes(pathname))
      // ) {
      //   return NextResponse.redirect(url);
      // }

      if (user.role.name !== userRole.ADMIN && adminRoutes.includes(pathname)) {
        console.log("requiered permissions of admin")
        return NextResponse.redirect(url);
      }
      
        // url.pathname = "/login"
      // return NextResponse.redirect(url);
      // }
  
      // if admin is trying to access user routes then redirect to login page
      // if (user.role === userRole.ADMIN && userRoutes.includes(pathname)) {
      //   return NextResponse.redirect(url);
      // }
      // if admin is trying to access super-admin routes then redirect to login page
      // if (user.role === userRole.ADMIN && superAdminRoutes.includes(pathname)) {
      //   return NextResponse.redirect(url);
      // }
      // if super-admin is trying to access user routes then redirect to login page
      // if (user.role === userRole.SUPER_ADMIN && userRoutes.includes(pathname)) {
      //   return NextResponse.redirect(url);
      // }
    }
  }
