import React from 'react'

export default function Menu() {
  return (
      <div className="menu">
          <div id="menu" role="menu">
              <div className="heading">
                  <a className="block" href="/" role="menuitem">
                      <span>
                          <img src="./public/dis.svg" alt="" />
                      </span>
                      Discover
                  </a>
                  <a className="block" href="/" role="menuitem">
                      <span>
                          <img src="./public/brow.svg" alt="" />
                      </span>
                      Browse
                  </a>
              </div>
              <div className="collaction">
                  <h2>collection</h2>
                  <a className="block" href="/" role="menuitem">
                      <span>
                          <img src="./public/like.svg" alt="" />
                      </span>
                      Likes
                  </a>
                  <a className="block" href="/" role="menuitem">
                      <span>
                          <img src="./public/list.svg" alt="" />
                      </span>
                      playlist
                  </a>
              </div>
              <div className="settings">
                  <h2>settings</h2>
                  <a className="block" href="/" role="menuitem">
                      <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                      </label>
                      dark mode{' '}
                  </a>
                  <a className="block" href="/" role="menuitem">
                      <span>
                          <img src="./public/brow.svg" alt="" />
                      </span>
                      download
                  </a>
              </div>
          </div>
          <div className="sidebar-footer">
              <ul className="grid mt-1">
                  <li className="none">Blog</li>
                  <li className="none">Pricing plan</li>
                  <li className="none">Privacy</li>
                  <li className="none">Terms</li>
              </ul>
              <p className="mt-1">@2022-2024 Music Theme</p>
          </div>
      </div>
  );
}
