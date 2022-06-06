import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers, deleteUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Dashboard = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;
  
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
      console.log(users)
    } else {
      navigate("/");
    }
<<<<<<< HEAD
  }, [dispatch, navigate, userInfo]);
=======
  }, [dispatch, navigate, userInfo]);
  
>>>>>>> cb01c20faaa6db5c1f9168e3a85ff93be909ecec
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell component="th" scope="row">{user._id}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.admin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Dashboard;
