import React from "react"
import { Nav } from "react-bootstrap"

export default function Navi(){
    return (
        <Nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Molly Treadwell</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/About">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Portfolio">Applications</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/SocialMedia">Social Media</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </Nav>
    )
}